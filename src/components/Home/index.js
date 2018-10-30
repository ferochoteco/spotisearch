// Dependencies
import React, { Component } from 'react';

// Assets
import './Home.css';

//Redux
import { connect } from 'react-redux';

// Components
import Search from '../Search';
import Card from '../Card';

class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }
    
    renderFavSongs(songs = []) {
        if (songs.length === 0) {
            return null;
        } else {
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
                                            imgAlt="img alt text"
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
    }

    render() {
        return (
            <section className="Home">
                <h5>Welcome to</h5>
                <h1>Spotisearch</h1>
                <Search />
                {this.renderFavSongs(this.props.favSongs)}
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);