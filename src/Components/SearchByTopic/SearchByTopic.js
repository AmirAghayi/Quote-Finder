import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './SearchByTopic.css';



class SearchByTopic extends Component {

    constructor() {
        super();

        this.state = {
            searchedQuotes: []
        }
    }

    handleTopicSearch = (event) => {
        this.setState({
            searchedQuotes: event.target.value
        })
    }

    searchByTopic = () => {
        axios.get(`/api/quotes/${this.state.searchedQuotes}`)
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
                        className="topic-search-input"
                        placeholder="Topic" />
                    <button
                        className="search-by-topic-btn"
                        onClick={this.searchByTopic}
                    >Search By Topic</button>
                </div>
                <section>
                    {this.searchedQuotes}
                </section>
                <Footer />
            </div>

        )
    }
}




export default SearchByTopic;