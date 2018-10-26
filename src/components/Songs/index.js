// Dependencies
import React, { Component } from 'react';

// Assets
import './Songs.css';

// Components
import Song from '../Song';

//Redux
import { connect } from 'react-redux';

// Config 
import config from '../../config';

class Songs extends Component {

    fetchData(album) {
        let endpoint = config.api.url + 'albums/' + album + '/tracks';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const songs = json.items;
                this.props.addSongs(songs);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.album);
    }

    renderSongsList(songs) {
        return (
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">CD 1</th>
                    </tr>
                </thead>
                <tbody>
                {
                    songs.map((song, key) => {
                        return (
                            <tr key={key}>
                                <td>{song.name}<span data-toggle="tooltip" title="Hooray!" className="glyphicon glyphicon-star-empty pull-right" aria-hidden="true" /></td>
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
        let showTracks = this.renderSongsList(this.props.songs);

        return (
            <div className="Songs">
                {showTracks}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      songs: state.favorites.songs
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addSongs: (songs) => {
            const action = {
                type: "FETCH_SONGS",
                songs
            }
            dispatch(action);
        },
        addFavoriteSong: (song) => {
            const action = {
                type: "ADD_FAV_SONG",
                song
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Songs);
