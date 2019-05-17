import React, { Component } from 'react';
import Logo from './image/Logo.png';
import './Frontheader.css';



class Frontheader extends Component {





render (){
  return (
    <div className="frontheader">
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
                       <li>Home</li>
                       <li>About</li>
                       <li>Register</li>
                       <li>Login</li>
                       <li>Contact us</li>
                     </ul>
               </div>

         </section>


         <section className="carousel">
                
         </section>
    </div>
    
    )
  }

}




export default Frontheader;