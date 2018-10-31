// Dependencies
import React, { Component } from 'react';

// Assets
import './Artists.css';

// Components
// import Artist from '../Artist';
import Card from '../Card';
import Search from '../Search';
import Separator from '../Separator';
import Breadcrumbs from '../Breadcrumbs';

//Redux
import { connect } from 'react-redux';

// Config 
import config from '../../config';

class ArtistsList extends Component {

    fetchData(artist) {
        let endpoint = config.api.url + 'search?q=' + artist + '&type=artist&limit=10';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const artists = json.artists.items;
                this.props.addArtists(artists);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.artist);
        let item = {
            url: this.props.match.url,
            name: "Artists",
            type: "search"
        }
        this.props.updateBreadcrumbsState(item);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params !== this.props.match.params) {
            this.fetchData(nextProps.match.params.artist);
        }
    }

    imgUrl(images = []) {
        if (images.length === 0) {
            return "http://www.prakashgold.com/Images/noimg.jpg";
        }
        else return images[2].url;
    }

    renderArtistsList() {
        return (
            <div className="CardsContainer">
                {
                    this.props.artists.map((artist, key) => {
                        const routeTo = "/artists/" + artist.id;
                        return (
                            <Card key={key}
                                    id={key}
                                    name={artist.name}
                                    imgUrl={this.imgUrl(artist.images)}
                                    imgAlt="img alt text"
                                    routeUrl={routeTo}
                            />
                        );
                    })
                }
            </div>
        );
    }
    

    render() {
        const showArtists = this.renderArtistsList();
        return (
            <section className="Artists">
                <h3>Artists</h3>
                <Search currentSearch={this.props.match.params.artist} />
                <Breadcrumbs />
                <Separator />
                {showArtists}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.favorites.artists
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addArtists: (artists) => {
            const action = {
                type: "FETCH_ARTISTS",
                artists
            };
            dispatch(action);
        },
        updateBreadcrumbsState: (item) => {
            const action = {
                type: "UPDATE_BREADCRUMBS",
                item
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistsList);