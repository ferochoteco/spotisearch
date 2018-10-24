// Dependencies
import React, { Component } from 'react';

// Assets
import './Songs.css';

// Components
import Song from '../Song';

// Config 
import config from '../../config';

class Songs extends Component {

    constructor (props) {
        super(props)
        this.state = {
            songs: []
        };
    }

    fetchData(album) {
        let endpoint = config.api.url + 'albums/' + album + '/tracks';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const songs = json.items;
                this.setState({
                    songs
                });
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.album);
    }

    renderSongsList(songs) {
        return (
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">CD 1</th>
                    </tr>
                </thead>
                <tbody>
                {
                    songs.map((song, key) => {
                        return (
                            <tr>
                                <td>{song.name}<span data-toggle="tooltip" title="Hooray!" class="glyphicon glyphicon-star-empty pull-right" aria-hidden="true" /></td>
                            </tr>
                            // <Song key={key} id={song.id} previewUrl={song.preview_url} songName={song.name} />
                        )
                    })
                }
                </tbody>
            </table>
        );
    }

    render() {
        let showTracks = this.renderSongsList(this.state.songs);

        return (
            <div className="Songs">
                {showTracks}
            </div>
        );
    }
}

export default Songs;
