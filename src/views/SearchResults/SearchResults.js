// Dependencies
import React, { Component } from 'react';

// Components
import ArtistsList from '../../components/ArtistsList';
import Breadcrumbs from '../../components/Breadcrumbs';
import Search from '../../components/Search';
import Separator from '../../components/Separator';

class SearchResults extends Component {
    render() {
        return (
            <section className="SearchResults">
                <h3>Artists</h3>
                <Search currentSearch={this.props.match.params.artist} />
                <Breadcrumbs name="Artists" type="search" url={this.props.match.url} />
                <Separator />
                <ArtistsList match={this.props.match} />
            </section>
        );
    }
}

export default SearchResults;
