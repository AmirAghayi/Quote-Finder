import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './QuoteSubmitForm.css';




class QuoteSubmitForm extends Component {
    constructor() {
        super();

        this.state = {
            quote: "",
            author: "",
            topic:"",
            tag: ""
        };
    }




    render() {
        return (
            <div className="submit-form-container">
                <Navbar />

                <section className="submit-form-section">
                <h1 className="page-title">Submit a Quote</h1>
                <hr className="line"/>
                    <form className="submit-form">
                        <label>Quote:</label>
                        <textarea 
                        className="quote-input"
                        type="text" 
                        placeholder="Quote..." 
                        />

                        <label>Author:</label>
                        <input 
                        className="author-input"
                        type="text" 
                        placeholder="Author" />

                        <label>Topic:</label>
                        <input 
                        className="topic-input"
                        type="text" 
                        placeholder="Topic" />


                        <input 
                        className="submit-btn"
                        type="submit" 
                        value="Submit" />
                    </form>
                </section>
                <Footer />
            </div>
        )
    }
}



export default QuoteSubmitForm;