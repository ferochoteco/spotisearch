// Dependencies
import React, { Component } from 'react';

// Assets
import './Artist.css';

// Components
import Card from '../Card';

//Redux
import { connect } from 'react-redux';

// Actions 
import { fetchAlbums } from './albumsActions';

class AlbumsList extends Component {

    componentDidMount() {
        const { artist } = this.props.match.params;
        this.props.getAlbums(artist);
    }

    renderAlbumsList() {
        return (
            <div className="CardsContainer">
                {
                    this.props.albums.map((album, key) => {
                        let routeTo = "/albums/" + album.id;
                        return (
                            <Card key={key}
                                    id={key}
                                    name={album.name}
                                    imgUrl={album.images[2] ? album.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"}
                                    imgAlt="img alt text"
                                    routeUrl={routeTo}
                            />
                        )
                    })
                }
            </div>
        );
    }

    render() {
        const showAlbums = this.renderAlbumsList();
        return (
            <section className="Albums">
                {showAlbums}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      albums: state.albumsReducer.albums
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbums: artistId => dispatch(fetchAlbums(artistId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList);

