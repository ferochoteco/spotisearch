// Dependencies
import React, { Component } from 'react';

// Components
import Breadcrumbs from '../../components/Breadcrumbs';
import Separator from '../../components/Separator';
import CardBig from '../../components/CardBig';
import SongsList from '../../components/SongsList';

//Redux
import { connect } from 'react-redux';

class Album extends Component {

    getAlbumData() {
        return this.props.albums.filter(album => album.id === this.props.match.params.album)[0];
    }

    render() {
        let albumData = this.getAlbumData();
        return (
            <div className="Album">
                <CardBig type="album"
                            year={albumData.release_date} 
                            albumName={albumData.name} 
                            artistName={albumData.artists[0].name} 
                            imgUrl={albumData.images ? albumData.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"} 
                            imgAlt="AltTxt" />
                <Breadcrumbs name={albumData.name} type="album" url={this.props.match.url} />
                <Separator />
                <SongsList match={this.props.match} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      albums: state.albumsReducer.albums,
      favSongs: state.favorites.favSongs
    };
}

export default connect(mapStateToProps)(Album);
