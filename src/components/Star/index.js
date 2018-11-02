// Dependencies
import React, { Component } from 'react';

// Assets
import './Star.css';

//Redux
import { connect } from 'react-redux';

class Star extends Component {

    isFavorite(songId) {
        var aux = this.props.favSongs.filter(song => song.id === songId);
        if (aux.length === 1) {
            return "glyphicon glyphicon-star pull-right";
        } else {
            return "glyphicon glyphicon-star-empty pull-right";
        }
    }

    render() {
        return (
            <span 
                onClick={this.props.onClick} 
                data-toggle="tooltip" 
                title={this.props.title ? this.props.title : "Add to favs"} 
                aria-hidden="true"
                className={this.isFavorite(this.props.id)} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
      songs: state.fetchData.songs,
      favSongs: state.favorites.favSongs
    };
  }
  
const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Star);