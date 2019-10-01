import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './SearchByAuthor.css';
import NewComponent from '../NewComponent'


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
        axios.get(`/api/quotes/author/${searchedAuthor}`)
            .then(response => {
                let data = Array.from(response.data)
                console.log(response.data)
                this.setState({
                    searchedQuotes: response.data
                }, () => console.log(data))
            });
    }




    render() {
        console.log(this.state)
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
                        {this.state.searchedQuotes.map(info => <NewComponent quoteInfo={info} />)}
                    </section>
                </div>
                <Footer />
            </div>

        )
    }
}



export default SearchByAuthor;
