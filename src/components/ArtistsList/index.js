// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Artists.css';

// Components
import Artist from '../Artist';
import Search from '../Search';

// Config 
import config from '../../config';

class ArtistsList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            artists: []
        };
    }

    fetchData(artist) {
        let endpoint = config.api.url + 'search?q=' + artist + '&type=artist&limit=10';
        let options = config.api.options;
        fetch(endpoint, options)
            .then(response => response.json())
            .then(json => {
                const artists = json.artists.items;
                this.setState({
                    artists
                });
            })
            .catch(error => console.log(`Fetch: ${endpoint} ${error} failed`));
    }

    componentWillMount() {
        this.fetchData(this.props.match.params.artist);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params !== this.props.match.params) {
            this.fetchData(nextProps.match.params.artist);
        }
    }

    renderArtistsList(artists) {
        return (
          <div>
            {
                artists.map((artist, key) => {
                    const routeTo = "/artists/" + artist.id;
                    return (
                        <p key={key} className="col-md-6">
                            <Link to={routeTo}>{artist.name}</Link>
                        </p>
                    );
                })
            }
          </div>
        );
      }
    

    render() {
        const showArtists = this.renderArtistsList(this.state.artists);
        return (
            <section className="Artists">
                <h3>Artists</h3>
                <Search currentSearch={this.props.match.params.artist} />
                {showArtists}
            </section>
        );
    }
}

export default ArtistsList;