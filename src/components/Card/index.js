// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Card.css';

class Card extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <Link to={this.props.routeUrl}>
                <div className="Card">
                    <img src={this.props.imgUrl} alt={this.props.imgAlt} />
                    <span>{this.props.name}</span>
                </div>
            </Link>
        );
    }
}

export default Card;
