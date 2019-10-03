import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import TopicSearchResult from '../TopicSearchResult/TopicSearchResult';
import './SearchByTopic.css';



class SearchByTopic extends Component {

    constructor() {
        super();

        this.state = {
            searchedQuotesByTopic: [],
            topicSearchInput: ""
        }
    }

    handleTopicSearchInput = (event) => {
        this.setState({
            topicSearchInput: event.target.value
        })
    }

    searchByTopic = () => {
        const searchedTopic = this.state.topicSearchInput;
        axios.get(`/api/quotes/topic/${searchedTopic}`)
            .then(res =>
                this.setState({
                    searchedQuotes: res.data
                })
            );
    }



    render() {
        return (

            <div>
                <Navbar />
                <div className="search-container-topic">
                    <input
                        name="topicSearchInput"
                        value={this.state.topicSearchInput}
                        className="topic-search-input"
                        placeholder="Topic"
                        onChange={event => this.handleTopicSearchInput(event)}
                    />
                    <button
                        className="search-by-topic-btn"
                        onClick={this.searchByTopic}
                    >Search By Topic</button>
                    <section>
                        {this.state.searchedQuotesByTopic.map(info => <TopicSearchResult quoteInfo={info} />)}
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}




export default SearchByTopic;