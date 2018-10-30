// Dependencies
import React, { Component } from 'react';

// Assets
import './Artists.css';

// Components
// import Artist from '../Artist';
import Card from '../Card';
import Search from '../Search';
import Separator from '../Separator';

// Config 
import config from '../../config';

class ArtistsList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            artists: []
        };
    }

    fetchData(artist) {
        let endpoint = config.api.url + 'search?q=' + artist + '&type=artist&limit=10';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const artists = json.artists.items;
                this.setState({
                    artists
                });
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.artist);
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

    renderArtistsList(artists) {
        return (
            <div className="CardsContainer">
                {
                    artists.map((artist, key) => {
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
        const showArtists = this.renderArtistsList(this.state.artists);
        return (
            <section className="Artists">
                <h3>Artists</h3>
                <Search currentSearch={this.props.match.params.artist} />
                <Separator />
                {showArtists}
            </section>
        );
    }
}

export default ArtistsList;