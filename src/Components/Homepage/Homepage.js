import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Frontbody from '../Frontbody/Frontbody';
import Frontbottom from '../Frontbottom/Frontbottom';
import Footer from '../Footer/Footer';
import './Homepage.css';




class Homepage extends Component {





render (){
  return (
    <div className="Homepage">
         <Navbar />
         <Frontbody />
         <Frontbottom />
         <Footer />
    </div>
    
    )
  }

}




export default Homepage;