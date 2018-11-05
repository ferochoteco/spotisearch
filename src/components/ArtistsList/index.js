// Dependencies
import React, { Component } from 'react';

// Assets
import './Artists.css';

// Components
import Card from '../Card';

//  Redux
import { connect } from 'react-redux';

// Actions 
import { fetchArtists } from './artistsActions';

class ArtistsList extends Component {

    componentDidMount() {
        const { artist } = this.props.match.params;
        this.props.getArtists(artist);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.props.getArtists(this.props.match.params.artist);
        }
    }

    renderArtistsList(artists) {
        return (
            <div className="CardsContainer">
                {
                    artists && artists.map((artist, key) => {
                        return (
                            <Card key={key}
                                    id={key}
                                    name={artist.name}
                                    imgUrl={artist.images[2] ? artist.images[2].url : "http://www.prakashgold.com/Images/noimg.jpg"}
                                    imgAlt="img alt text"
                                    routeUrl={"/artists/" + artist.id}
                            />
                        );
                    })
                }
            </div>
        );
    }
    
    render() {
        const { artists, error, loading } = this.props;
        const showArtists = this.renderArtistsList(artists);

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <section className="Artists">
                {showArtists}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        artists: state.artistsReducer.artists
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getArtists: artist => dispatch(fetchArtists(artist))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistsList);
