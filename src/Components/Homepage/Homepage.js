import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Frontbody from '../Frontbody/Frontbody';
import Frontbottom from '../Frontbottom/Frontbottom';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homepage.css';




class Homepage extends Component {
  constructor(){
    super();

    this.state = {
       quotesList: []
    };
  }



componentDidMount(){
  this.getQuotes();
}


getQuotes = () => {
   axios.get('api/quotes')
   .then(response => {
     this.setState({
       quotesList: response.data
     })
   })
}


render (){
  

  return (
    <div className="Homepage" style={{height: '100%'}}>
         <Navbar />
         <Frontbody />
         <Frontbottom />
         <Footer />
    </div>
    
    )
  }

}




export default Homepage;