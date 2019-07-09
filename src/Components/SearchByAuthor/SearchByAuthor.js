import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SearchByAuthor.css';



class SearchByAuthor extends Component {

    constructor() {
        super();

        this.state = {
            searchedQuotes: []
        }
    }

    handleAuthorSearch = () => {
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
                <div className="search-container">
                    <input
                        className="author-search-input"
                        placeholder="Author's Name" />
                    <button className="search-by-author-btn">Search By Author</button>
                    <section>
                        {this.searchedQuotes}
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}




export default SearchByAuthor;