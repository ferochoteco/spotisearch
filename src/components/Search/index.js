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
            routeTo: "/artists/" + e.target.value
        })
    }

    componentWillMount() {
        if (this.props.currentSearch) {
            this.setState({
                inputValue: this.props.currentSearch
            });
        }
    }

    render() {
        return (
            <div className="Search">
                <p>You are currently searching: "{this.state.inputValue}"</p>
                <input type="search" placeholder="Type the name of your favorite artist" onChange={this.handleOnChange} />
                <button><Link to={this.state.routeTo}><b>Go!</b></Link></button>
            </div>
        );
    }
}

export default Search;
