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
            <div className="col-md-6">
                <p className="col-md-3">{this.props.songName}</p>
                <audio className="col-md-9" controls>
                    <source src={this.props.previewUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Song;
