import React, { Component } from 'react';
import Logo from './image/Logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {





render (){
  return (
    <div className="navbar">
         <section className="logo-nav">
               <div className="logo">
                    <img 
                    className="Logo-icon"
                    src={Logo}
                    alt="Logo"
                    />
               </div>
               <div className="nav">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Registration"><li>Register</li></Link>
                        <Link to="/Login"><li>Login</li></Link>
                        <Link to="/Contact Us"><li className="Contact">Contact us</li></Link>
                    </ul>
                </div>

         </section>


         <section className="carousel">
                
         </section>
    </div>
    
    )
  }

}




export default Navbar;