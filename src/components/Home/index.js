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

    componentDidMount() {
        let item = {
            type: "home"
        }
        this.props.updateBreadcrumbsState(item);
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
                <Search searchText={true} />
                <div className="Favorites">
                    {this.renderFavSongs(this.props.favSongs)}
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
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

export default connect(null,mapDispatchToProps)(Home);