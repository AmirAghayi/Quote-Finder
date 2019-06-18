import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SearchByTopic.css';



class SearchByTopic extends Component {






    render() {
        return (

            <div>
                <Navbar />
                <div className="search-container-topic">
                    <input 
                    className="topic-search-input"
                    placeholder="Topic" />
                    <button className="search-by-topic-btn">Search By Topic</button>
                </div>
                <Footer />
            </div>

        )
    }
}




export default SearchByTopic;