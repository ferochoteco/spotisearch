// Dependencies
import React, { Component } from 'react';

// Assets
import './Favorites.css';

// Components
import Card from '../Card';

//Redux
import { connect } from 'react-redux';

class Favorites extends Component {

    renderFavSongs(songs = []) {
        return (
            <div>
                <h3>Favorite Songs</h3>
                <div className="CardsContainer">
                    {
                        songs.map((song, key) => {
                            return (
                                <Card key={key}
                                        id={song.id}
                                        name={song.name}
                                        imgUrl={song.albumUrl}
                                        imgAlt="AltTxt"
                                        artistName={song.artist}
                                        albumName={song.album}
                                        showStar={true}
                                        onClick={() => this.props.removeFavSong(song.id)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    render() {
        return (
            <section className="Favorites">
                {
                    this.props.favSongs.length > 0 && this.renderFavSongs(this.props.favSongs)
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      favSongs: state.favorites.favSongs
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeFavSong: (songId) => {
            const action = {
                type: "REMOVE_FAV_SONG",
                songId
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
