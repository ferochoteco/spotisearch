// Dependencies
import React, { Component } from 'react';

// Assets
import './Artists.css';

// Components
import Artist from '../Artist';
import Search from '../Search';

// Config 
import config from '../../config';

class Artists extends Component {

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

    renderBooksList(artists) {
        return (
          <div>
            <h1>Artists</h1>
            {
                artists.map((artist, key) => {
                    return (
                        <Artist key={key} id={artist.id} artistName={artist.name} />
                    )
                })
            }
          </div>
        );
      }
    

    render() {
        
        let show = this.renderBooksList(this.state.artists);

        return (
            <section className="Artists">
                <Search currentSearch={this.props.match.params.artist} />
                {show}
            </section>
        );
    }
}

export default Artists;