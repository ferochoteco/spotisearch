// Dependencies
import React, { Component } from 'react';

// Assets
import './Album.css';

class Album extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="Album">
                <h5>Album</h5>
            </div>
        );
    }
}

export default Album;
