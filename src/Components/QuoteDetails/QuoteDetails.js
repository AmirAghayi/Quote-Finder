import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './QuoteDetails.css';


class QuoteDetails extends Component {

    constructor() {
        super();

        this.state = {
            author: "",
            body: "",
            tag: "",
        }
    }

//   how do I use tags?


    componentWillMount = () => {
        axios.get(`https://favqs.com/api/quotes/${this.props.match.params.id}`, { headers: {Authorization: `Token token="7e1cd958d0d8cfebace9c3d0e5c146e9"`}})
            .then(response => {
                this.setState({
                    author: response.data.author,
                    body: response.data.body
                });
            });



    }

    render() {
        return (
            <div className="quote-details-container">
                <Navbar />
                

            <form className="modal">
                <Link to="/Homepage">
                <span className="closeBtn">&times;</span>
                </Link>
            
                <div className="quote-body">
                    <h1> "{this.state.body}" </h1>
                </div>
                <div className="author">
                    <p className="author"> by {this.state.author} </p>
                </div>
                <textarea 
                
                className="textarea"
                type="textarea"
                placeholder="Add a Comment" />
                <button className="comment-btn">Post Comment</button>
            </form>
                
            <Footer />    
            </div>
        )
    }



}



export default QuoteDetails;