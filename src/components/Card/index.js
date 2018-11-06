// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Card.css';
import Star from '../Star';

class Card extends Component {

    renderFavData() {
        let { artistName, albumName, showStar, id, onClick } = this.props;
        if (artistName && albumName && showStar && id && onClick) {
            return <div>
                        <p><b>Artist:</b> {artistName}</p>
                        <p><b>Album:</b> {albumName}</p>
                        <Star id={id}
                        title="Remove from favs" 
                        onClick={onClick} />
                    </div>
        }
    }

    render() {
        return (
            <Link to={this.props.routeUrl ? this.props.routeUrl : ''}>
                <div className="Card">
                    <img src={this.props.imgUrl} alt={this.props.imgAlt} />
                    <div className="PrimaryContent">
                        <p><b>{this.props.name}</b></p>
                        {this.renderFavData()}
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;
