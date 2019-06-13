import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';





class Contact extends Component {





  render (){
    return (
      <div className="Contact-container">
          
            <Navbar />
          
        
            <p className="contact-title">Contact Us</p>
            <hr className="line"/>
            <div className="contact-info">
              <p>Phone Number: 801-385-XXXX</p>
              <p>Email Address: oiwefi.wefdjn@gmail.com</p>
            </div>
            <Footer />
      </div>
               
      )
    }
  
  }
  
  
  
  
  export default Contact;