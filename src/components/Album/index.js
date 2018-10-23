// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Album.css';

class Album extends Component {

    constructor (props) {
        super(props)
        this.state = {
            routeTo: "/albums/" + this.props.id
        };
    }

    render() {
        return (
            <p><Link to={this.state.routeTo}>{this.props.albumName}</Link></p>
        );
    }
}

export default Album;
