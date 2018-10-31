// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Breadcrumbs.css';

//Redux
import { connect } from 'react-redux';

class Breadcrumbs extends Component {

    renderBreadcrumbsLinks() {
        const linksLen = this.props.breadcrumbs.length;
        return (
            <div>
                {
                    this.props.breadcrumbs.map((link,index) => {
                        if (linksLen === index + 1) {
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
      breadcrumbs: state.favorites.breadcrumbs
    };
  }
  
const mapDispatchToProps = () => {
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Breadcrumbs);
