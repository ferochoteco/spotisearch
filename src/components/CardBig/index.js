// Dependencies
import React, { Component } from 'react';

// Assets
import './CardBig.css';

class CardBig extends Component {

    constructor (props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="CardBig">
                <img src={this.props.imgUrl} alt={this.props.imgAlt} />
                {
                    this.props.type === "album" && 
                        <div className="PrimaryContent">
                            <h3><b>{this.props.albumName}</b></h3>
                            <h5><b>{this.props.artistName}</b> - {this.props.year}</h5>
                        </div>
                }
                {
                    this.props.type === "artist" && 
                        <div className="PrimaryContent">
                            <h3><b>{this.props.artistName}</b></h3>
                            <h5><b>{this.props.genre}</b></h5>
                        </div>
                }
            </div>
        );
    }
}

export default CardBig;
