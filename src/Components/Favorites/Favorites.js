import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Favorites.css';



class Favorites extends Component {





render (){
  return (
    <div className="About">
        
          <Navbar />
          
      
          <p className="about-title">Favorite Quotes</p>
          <hr className="line"/>
          <Footer />
    </div>
             
    )
  }

}




export default Favorites;