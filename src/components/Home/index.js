// Dependencies
import React, { Component } from 'react';

// Assets
import './Home.css';

//Redux
import { connect } from 'react-redux';

// Components
import Search from '../Search';
import Favorites from '../Favorites';

class Home extends Component {

    componentDidMount() {
        let item = {
            type: "home"
        }
        this.props.updateBreadcrumbsState(item);
    }

    render() {
        return (
            <section className="Home">
                <h5>Welcome to</h5>
                <h1>Spotisearch</h1>
                <Search searchText={true} />
                <Favorites />
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBreadcrumbsState: (item) => {
            const action = {
                type: "UPDATE_BREADCRUMBS",
                item
            };
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(Home);