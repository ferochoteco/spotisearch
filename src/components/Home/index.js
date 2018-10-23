// Dependencies
import React, { Component } from 'react';

// Assets
import './Home.css';

// Components
import Search from '../Search';

class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <section className="Home">
                <h5>Welcome to</h5>
                <h1>Spotisearch</h1>
                <Search />
            </section>
        );
    }
}

export default Home;
