// Dependencies
import React, { Component } from 'react';

// Assets
import './Artist.css';

// Components
import Card from '../Card';
import Separator from '../Separator';

// Config 
import config from '../../config';

class Artist extends Component {

    constructor (props) {
        super(props)
        this.state = {
            albums: []
        };
    }

    fetchData(artist) {
        let endpoint = config.api.url + 'artists/' + artist + '/albums?include_groups=album,single';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const albums = json.items;
                this.setState({
                    albums
                });
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.artist);
    }

    imgUrl(images = []) {
        if (images.length == 0) {
            return "http://www.prakashgold.com/Images/noimg.jpg";
        }
        else 
            return images[2].url;
    }

    renderAlbumsList(albums) {
        return (
            <div className="CardsContainer">
                {
                    albums.map((album, key) => {
                        let routeTo = "/albums/" + album.id;
                        return (
                            <Card key={key}
                                    id={key}
                                    name={album.name}
                                    imgUrl={this.imgUrl(album.images)}
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
        const showAlbums = this.renderAlbumsList(this.state.albums);
        const showArtistInfo = "";

        return (
            <div>
                {showArtistInfo}
                <Separator />
                <section className="Albums">
                    {showAlbums}
                </section>
            </div>
        );
    }
}

export default Artist;
