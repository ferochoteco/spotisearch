// Dependencies
import React, { Component } from 'react';

// Assets
import './Artist.css';

// Components
import Card from '../Card';
import CardBig from '../CardBig';
import Separator from '../Separator';
import Breadcrumbs from '../Breadcrumbs';

//Redux
import { connect } from 'react-redux';

// Actions 
import { fetchAlbums } from './albumsActions';

class Artist extends Component {

    getArtistData() {
        return this.props.artists.filter(artist => artist.id === this.props.match.params.artist)[0];
    }

    componentDidMount() {
        const { artist } = this.props.match.params;
        this.props.getAlbums(artist);
        let item = {
            url: this.props.match.url,
            name: this.getArtistData().name,
            type: "artist"
        }
        this.props.updateBreadcrumbsState(item);
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
        const artistData = this.getArtistData();
        return (
            <div>
                <CardBig type="artist"
                            genre={artistData.genres[0]} 
                            artistName={artistData.name} 
                            imgUrl={artistData.images[2] ? artistData.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"} 
                            imgAlt="AltText" />
                <Breadcrumbs />
                <Separator />
                <section className="Albums">
                    {showAlbums}
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      albums: state.albumsReducer.albums,
      artists: state.artistsReducer.artists
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbums: artistId => dispatch(fetchAlbums(artistId)),
        updateBreadcrumbsState: (item) => {
            const action = {
                type: "UPDATE_BREADCRUMBS",
                item
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist);

