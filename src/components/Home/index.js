// Dependencies
import React, { Component } from 'react';

// Assets
import './Home.css';

class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <article className="Home">
                <h5>Welcome to</h5>
                <h1>Spotisearch</h1>
                <h5>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</h5>
                <input type="search" placeholder="Type the name of your favorite artist"></input>
            </article>
        );
    }
}

export default Home;
