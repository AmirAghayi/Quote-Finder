import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './SearchByAuthor.css';


class SearchByAuthor extends Component {

    constructor() {
        super();

        this.state = {
            searchedQuotes: [],
            searchInput: ""
        }
    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }


    handleAuthorSearch = () => {
        const searchedAuthor = this.state.searchInput;
        console.log(this.state.searchInput)
        axios.get('/api/quotes/', searchedAuthor)
            .then(response =>
                this.setState({
                    searchedQuotes: response.data
                }, console.log(response.data))
            );
    }




    render() {
        return (

            <div>
                <Navbar />
                <div className="search-container">
                    <input
                        name="searchInput"
                        value={this.state.searchInput}
                        className="author-search-input"
                        placeholder="Author's Name"
                        onChange={event => this.handleSearchInput(event)}
                    />
                    <button
                        className="search-by-author-btn"
                        onClick={this.handleAuthorSearch}
                    >Search By Author</button>
                    <section>
                        {this.searchedQuotes}
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}



<<<<<<< HEAD
export default SearchByAuthor;
=======
export default SearchByAuthor;
>>>>>>> e31edbd157244b203ddead737af10792dd8caad6
