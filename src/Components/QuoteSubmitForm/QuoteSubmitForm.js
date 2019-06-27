import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './QuoteSubmitForm.css';
import axios from 'axios';




class QuoteSubmitForm extends Component {
    constructor() {
        super();

        this.state = {
            quotebody: "",
            author: "",
            topic: "",
        };
    }


handleQuotebodyChange = (event) => {
   this.setState({
       quotebody: event.target.value
   });
}


handleAuthorChange = (event) => {
    this.setState({
        author: event.target.value
    });
}


handleTopicChange = (event) => {
    this.setState({
        topic: event.target.value
    });
}




resetState = () => {
    this.setState({
        quotebody: "",
        author: "",
        topic: "",
    });
};




createQuote = () => {
    const {
        quotebody, 
        author, 
        topic 
    } = this.state;
    const quote = {
        quotebody, 
        author, 
        topic
    }


axios.post('/api/quote',quote)
     .then(response => {
         console.log(response.data)
         this.resetState();
         this.props.history.push('/Contact Us');
     });
};







    render() {
        return (
            <div className="submit-form-container">
                <Navbar />

                <section className="submit-form-section">
                    <h1 className="page-title">Submit a Quote</h1>
                    <hr className="line" />
                    <form className="submit-form">
                        <div className="quote-container">
                            <label>Quote:</label>
                            <textarea
                                className="quote-input"
                                type="text"
                                placeholder="Quote..."
                                onChange={this.handleQuotebodyChange}
                            />
                        </div>

                        <div className="author-container">
                            <label>Author:</label>
                            <input
                                className="author-input"
                                type="text"
                                placeholder="Author"
                                onChange={this.handleAuthorChange}
                                />
                        </div>

                        <div className="topic-container">
                            <label>Topic:</label>
                            <input
                                className="topic-input"
                                type="text"
                                placeholder="Topic"
                                onChange={this.handleTopicChange}
                                />
                        </div>


                        <div className="button-container">
                            <button
                                className="submit-btn"
                                type="submit"
                                value="Submit"
                                onClick={this.createQuote}
                                > Submit</button>
                        </div>



                    </form>
                </section>
                <Footer />
            </div>
        )
    }
}



export default QuoteSubmitForm;