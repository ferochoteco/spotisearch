// Dependencies
import React, { Component } from 'react';

// Assets
import './Song.css';

class Song extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="Song">
                <h5>Song</h5>
            </div>
        );
    }
}

export default Song;
