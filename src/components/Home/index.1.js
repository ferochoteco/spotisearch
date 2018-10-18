import React, { Component } from 'react';

// Assets
import './Home.css';

class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
          url: `https://api.spotify.com/v1/search?q=cerati&type=artist`,
          query: this.props.value, 
          urlSearch: this.props.url,
          data: {}, 
          inputCleared: false 
        }
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnclick() {
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + 'Cerati' + '&type=artist&limit=2';
        var accessToken = 'BQB0cxFiinlOxk69Q9RyXxJsyGdFW_8Mj_6Pwlj6vdK0E4ocEdQ4j2cX0HdN8_zgNFPNDZ0XiZFmcSwJRfWt3zVmoNKgQxjT9Lyj0kudljm9SJooT-_DLqMplNk3AjZNGO9vMMyNSrF6w5Mq97L_XuJMGeyMXBkdRc5Wsw&refresh_token=AQAiHIs4EbIKF3U7X8zu4OF5S8IiNiubVqPWnk1sQelQqkzvZDuxaVUo8wViqhktzoo5E-BJa_Q_UInknz9275mFtp429XMHOj_peFYPNtwYyzb1P1b2BQK6cd1DijqlD-BxFQ';

        var myOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        }

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                const artists = json.artists.items;
                this.setState({data: artists});
                console.log(this.state.data);
            })
            .catch(error => console.log(`Fetch: ${FETCH_URL} ${error} failed`));
    }

    render() {
        return (
            <article className="Home">
                <button onClick={this.handleOnclick}>Click me!</button>
            </article>
        );
    }
}

export default Home;
