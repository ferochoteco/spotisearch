// Dependencies
import React, { Component } from 'react';

// Components
import AlbumsList from '../../components/AlbumsList';
import CardBig from '../../components/CardBig';
import Separator from '../../components/Separator';
import Breadcrumbs from '../../components/Breadcrumbs';

//Redux
import { connect } from 'react-redux';

class Artist extends Component {

    getArtistData() {
        return this.props.artists.filter(artist => artist.id === this.props.match.params.artist)[0];
    }

    render() {
        const { genres, name, images } = this.getArtistData();
        return (
            <div>
                <CardBig type="artist"
                            genre={genres[0]} 
                            artistName={name} 
                            imgUrl={images[2] ? images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"} 
                            imgAlt="AltText" />
                <Breadcrumbs name={name} type="artist" url={this.props.match.url} />
                <Separator />
                <AlbumsList match={this.props.match} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      artists: state.artistsReducer.artists
    };
}

export default connect(mapStateToProps)(Artist);

