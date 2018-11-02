// Dependencies
import React, { Component } from 'react';

// Assets
import './Artist.css';

// Components
import Card from '../Card';
import CardBig from '../CardBig';
import Separator from '../Separator';
import Breadcrumbs from '../Breadcrumbs';

//Redux
import { connect } from 'react-redux';

// Config 
import config from '../../config';

class Artist extends Component {

    fetchData(artist) {
        let endpoint = config.api.url + 'artists/' + artist + '/albums?include_groups=album,single';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const albums = json.items;
                this.props.addAlbums(albums);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    getArtistData() {
        return this.props.artists.filter(artist => artist.id === this.props.match.params.artist)[0];
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.artist);
        let item = {
            url: this.props.match.url,
            name: this.getArtistData().name,
            type: "artist"
        }
        this.props.updateBreadcrumbsState(item);
    }

    renderAlbumsList() {
        return (
            <div className="CardsContainer">
                {
                    this.props.albums.map((album, key) => {
                        let routeTo = "/albums/" + album.id;
                        return (
                            <Card key={key}
                                    id={key}
                                    name={album.name}
                                    imgUrl={album.images[2] ? album.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"}
                                    imgAlt="img alt text"
                                    routeUrl={routeTo}
                            />
                        )
                    })
                }
            </div>
        );
    }

    render() {
        const showAlbums = this.renderAlbumsList();
        const artistData = this.getArtistData();
        return (
            <div>
                <CardBig type="artist"
                            genre={artistData.genres[0]} 
                            artistName={artistData.name} 
                            imgUrl={artistData.images ? artistData.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"} 
                            imgAlt="AltText" />
                <Breadcrumbs />
                <Separator />
                <section className="Albums">
                    {showAlbums}
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      albums: state.fetchData.albums,
      artists: state.fetchData.artists
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        addAlbums: (albums) => {
            const action = {
                type: "FETCH_ALBUMS",
                albums
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

export default connect(mapStateToProps,mapDispatchToProps)(Artist);

