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
                console.log(this.state.songs);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.album);
    }

    renderSongsList(songs) {
        return (
            <div>
                {
                    songs.map((song, key) => {
                        return (
                            <Song key={key} id={song.id} previewUrl={song.preview_url} songName={song.name} />
                        )
                    })
                }
            </div>
        );
    }

    render() {
        let show = this.renderSongsList(this.state.songs);

        return (
            <div className="Songs">
                <h3>Tracks</h3>
                {show}
            </div>
        );
    }
}

export default Songs;
