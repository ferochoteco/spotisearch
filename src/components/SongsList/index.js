// Dependencies
import React, { Component } from 'react';

// Assets
import './SongsList.css';

// Components
import Star from '../Star';

//Redux
import { connect } from 'react-redux';

// Actions 
import { fetchSongs } from './songsActions';

class SongsList extends Component {

    componentDidMount() {
        const { album } = this.props.match.params;
        this.props.getSongs(album);
    }

    isFavorite(songId) {
        return this.props.favSongs.filter(track => track.id === songId).length === 1;
    }

    getContextData() {
        const album = this.props.albums.filter(album => album.id === this.props.match.params.album);
        return {
            albumName: album[0].name,
            albumImgUrl: album[0].images[2] ? album[0].images[2].url : "http://www.prakashgold.com/Images/noimg.jpg",
            artistName: album[0].artists[0].name
        }
    }

    toggleFavSong(song) {
        if (this.isFavorite(song.id)) {
            this.props.removeFavSong(song.id);
        } else {
            this.props.addFavoriteSong(song,this.getContextData());
        }
    }

    groupByAlbum(songs) {
        const result = songs.reduce(function (r, a) {
                            r[a.disc_number] = r[a.disc_number] || [];
                            r[a.disc_number].push(a);
                            return r;
                        }, []);
        return result;
    }

    renderSongsList(albums) {
        return albums.map((album, key) => {
            return ( 
                <table key={key} className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">CD {key}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        album.map((song, key) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        {song.name}
                                        <Star id={song.id} 
                                            title={this.isFavorite(song.id) ? "Remove from favs" : "Add to favs"}
                                            onClick={() => this.toggleFavSong(song)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table> 
            )
        })
    }

    render() {
        let songsByAlbum = this.groupByAlbum(this.props.songs);
        let showTracks = this.renderSongsList(songsByAlbum);
        return (
            <div className="SongsList">
                {showTracks}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      songs: state.songsReducer.songs,
      albums: state.albumsReducer.albums,
      favSongs: state.favorites.favSongs
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        getSongs: albumId => dispatch(fetchSongs(albumId)),
        addFavoriteSong: (song, data) => {
            const action = {
                type: "ADD_FAV_SONG",
                song,
                data
            };
            dispatch(action);
        },
        removeFavSong: (songId) => {
            const action = {
                type: "REMOVE_FAV_SONG",
                songId
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongsList);
