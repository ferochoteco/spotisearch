// Dependencies
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// Assets
import logo from './images/spotify-logo.png';
import './css/Header.css';

class Header extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   items: PropTypes.array.isRequired
  // };

  render() {
    const { title, items } = this.props;

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
