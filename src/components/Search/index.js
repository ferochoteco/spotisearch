// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Search.css';

class Search extends Component {

    constructor (props) {
        super(props)
        this.state = {
            inputValue: "",
            routeTo: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            inputValue: e.target.value,
            routeTo: "/search/" + e.target.value
        })
    }

    currentSearch() {
        if (this.props.currentSearch) {
            return <p><b>You are currently searching: </b>"{this.props.currentSearch}"</p>
        }
    }

    render() {
        return (
            <div className="Search">
                <h5>Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!</h5>
                {this.currentSearch()}
                <input type="search" placeholder="Type the name of your favorite artist" onChange={this.handleOnChange} />
                <button><Link to={this.state.routeTo}><b>Go!</b></Link></button>
            </div>
        );
    }
}

export default Search;
