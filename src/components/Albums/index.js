// Dependencies
import React, { Component } from 'react';

// Assets
import './Albums.css';

// Components
import Album from '../Album';

//Redux
import { connect } from 'react-redux';

// Config 
import config from '../../config';

class Albums extends Component {

    fetchData(artist) {
        let endpoint = config.api.url + 'artists/' + artist + '/albums?include_groups=album,single';
        let options = config.api.options;
        debugger;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const albums = json.items;
                this.props.addAlbums(albums);
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.artist);
    }

    renderAlbumsList() {
        return (
            <div>
                {
                    this.props.albums.map((album, key) => {
                        return (
                            <Album key={key} id={album.id} albumName={album.name} />
                        )
                    })
                }
            </div>
        );
    }

    render() {
        let show = this.renderAlbumsList();
        debugger;
        return (
            <section className="Albums">
                <h3>Albums</h3>
                {show}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      albums: state.favorites.albums
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        addAlbums: (albums) => {
            const action = {
                type: "FETCH_ALBUMS",
                albums
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);
