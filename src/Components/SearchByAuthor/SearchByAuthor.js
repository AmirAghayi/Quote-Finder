import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SearchByAuthor.css';



class SearchByAuthor extends Component {






    render() {
        return (

            <div>
                <Navbar />
                <div className="search-container">
                    <input 
                    className="author-search-input"
                    placeholder="Author's Name" />
                    <button className="search-by-author-btn">Search By Author</button>
                </div>
                <Footer />
            </div>

        )
    }
}




export default SearchByAuthor;