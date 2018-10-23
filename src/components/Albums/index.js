// Dependencies
import React, { Component } from 'react';

// Assets
import './Albums.css';

// Components
import Album from '../Album';

// Config 
import config from '../../config';

class Albums extends Component {

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

    renderBooksList(albums) {
        return (
            <div>
                {
                    albums.map((album, key) => {
                        return (
                            <Album key={key} id={album.id} albumName={album.name} />
                        )
                    })
                }
            </div>
        );
    }

    render() {
        let show = this.renderBooksList(this.state.albums);

        return (
            <section className="Albums">
                <h3>Albums</h3>
                {show}
            </section>
        );
    }
}

export default Albums;
