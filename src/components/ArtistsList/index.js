// Dependencies
import React, { Component } from 'react';

// Assets
import './Artists.css';

// Components
// import Artist from '../Artist';
import Breadcrumbs from '../Breadcrumbs';
import Card from '../Card';
import Search from '../Search';
import Separator from '../Separator';

//  Redux
import { connect } from 'react-redux';

// Actions 
import { fetchArtists } from './artistsActions';

class ArtistsList extends Component {

    updateBreadcrumbs() {
        const item = {
            url: this.props.match.url,
            name: "Artists",
            type: "search"
        }
        this.props.updateBreadcrumbsState(item);
    }

    componentDidMount() {
        const { artist } = this.props.match.params;
        this.props.getArtists(artist);
        this.updateBreadcrumbs();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.props.getArtists(this.props.match.params.artist);
            this.updateBreadcrumbs();
        }
    }

    renderArtistsList(artists) {
        return (
            <div className="CardsContainer">
                {
                    artists ? artists.map((artist, key) => {
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
                : ''}
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
                <h3>Artists</h3>
                <Search currentSearch={this.props.match.params.artist} />
                <Breadcrumbs />
                <Separator />
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
        getArtists: artist => dispatch(fetchArtists(artist)),
        updateBreadcrumbsState: item => {
            const action = {
                type: "UPDATE_BREADCRUMBS",
                item
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistsList);
