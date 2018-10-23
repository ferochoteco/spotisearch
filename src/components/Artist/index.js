// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Artist.css';

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
                console.log(this.state.albums);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.artist);
    }

    renderAlbumsList(albums) {
        return (
            <div>
                {
                    albums.map((album, key) => {
                        let routeTo = "/albums/" + album.id;
                        return (
                            <p key={key} className="col-md-6"><Link to={routeTo}>{album.name}</Link></p>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        let showAlbums = this.renderAlbumsList(this.state.albums);

        return (
            <section className="Albums">
                <h3>Albums</h3>
                <div>
                {showAlbums}
                </div>
            </section>
        );
    }
}

export default Artist;
