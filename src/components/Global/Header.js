// Dependencies
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/spotify-logo.png';
import './css/Header.css';

// Components
import Search from '../Search';

//Redux
import { connect } from 'react-redux';

class Header extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   items: PropTypes.array.isRequired
  // };

  render() {
    // const { title, items } = this.props;

    return (
      <div className="Header">
        { this.props.breadcrumbs.length > 2 ? 
          <div className="SecondaryHeader">
            <div className="Logo">
              <Link to="/">
                <img src={logo} title="Home" alt="Home" />
              </Link>
            </div>
            <Search />
          </div>
        : 
          <div className="Logo CenterAlign">
            <Link to="/">
              <img src={logo} title="Home" alt="Home" />
            </Link>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.favorites.breadcrumbs.length);
  return {
    breadcrumbs: state.favorites.breadcrumbs
  };
}

export default connect(mapStateToProps, null)(Header);
