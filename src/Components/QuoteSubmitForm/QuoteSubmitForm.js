import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './QuoteSubmitForm.css';




class QuoteSubmitForm extends Component {
    constructor(){
        super();

        this.state ={
            tag:"",
            body:"",
            author:""
        };
    }
         



    render(){
        return(
            <div className="submit-form">
                <Navbar />
                <h1 className="submit-quotes">This is the submit form!</h1>

            </div>
        )
    }
}



export default QuoteSubmitForm;