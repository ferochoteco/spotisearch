// Dependencies
import React, { Component } from 'react';

// Assets
import './Songs.css';

// Components
import Star from '../Star';
import Breadcrumbs from '../Breadcrumbs';
import Separator from '../Separator';
import CardBig from '../CardBig';

//Redux
import { connect } from 'react-redux';

// Actions 
import { fetchSongs } from './songsActions';

class Songs extends Component {

    getAlbumData() {
        return this.props.albums.filter(album => album.id === this.props.match.params.album)[0];
    }

    componentDidMount() {
        const { album } = this.props.match.params;
        this.props.getSongs(album);
        let item = {
            url: this.props.match.url,
            name: this.getAlbumData().name,
            type: "album"
        }
        this.props.updateBreadcrumbsState(item);
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
                                <td>
                                    {song.name}
                                    <Star id={song.id} 
                                        title={this.isFavorite(song.id) ? "Remove from favs" : "Add to favs"}
                                        onClick={() => this.toggleFavSong(song)} />
                                </td>
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
        let albumData = this.getAlbumData();
        return (
            <div className="Songs">
                <CardBig type="album"
                            year={albumData.release_date} 
                            albumName={albumData.name} 
                            artistName={albumData.artists[0].name} 
                            imgUrl={albumData.images ? albumData.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"} 
                            imgAlt="img alt text" />
                <Breadcrumbs />
                <Separator />
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

export default connect(mapStateToProps,mapDispatchToProps)(Songs);
