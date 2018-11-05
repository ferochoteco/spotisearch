// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Breadcrumbs.css';

//Redux
import { connect } from 'react-redux';

class Breadcrumbs extends Component {

    componentDidMount() {
        const item = {
            url: this.props.url,
            name: this.props.name,
            type: this.props.type
        }
        this.props.updateBreadcrumbsState(item);
    }


    renderBreadcrumbsLinks() {
        const linksLength = this.props.breadcrumbs.length;
        return (
            <div>
                {
                    this.props.breadcrumbs.map((link,index) => {
                        if (linksLength === index + 1) {
                            return <Link key={index} to={link.url}>{link.name}</Link>;
                        } else {
                            return <span key={index}><Link to={link.url}>{link.name}</Link></span>;
                        }
                    })
                }
            </div>
        );
    }

    render() {
        const showBreadcrumb = this.renderBreadcrumbsLinks();
        return (
            <section className="Breadcrumbs">
                {showBreadcrumb}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      breadcrumbs: state.breadcrumbs.breadcrumbs
    };
}

const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps,mapDispatchToProps)(Breadcrumbs);
