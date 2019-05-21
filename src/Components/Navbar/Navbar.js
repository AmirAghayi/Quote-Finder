import React, { Component } from 'react';
import Logo from './image/Logo.png';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {

     state = {
          sideDrawerOpen: false
        };
            
  
  drawerToggleClickHandler = () => {
       this.setState( (prevState) => {
         return {
           sideDrawerOpen: !prevState.sideDrawerOpen
         };
       });
  };
  
  backdropClickHandler = () => {
      this.setState({
         sideDrawerOpen: false
      });
  };



render (){
     let backdrop;
     let drawerClickHandler=this.drawerToggleClickHandler;

  if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
  }

  return (
    <div className="navbar">
          <section className="DrawerToggleButton">
               <DrawerToggleButton click={drawerClickHandler}/>
          </section>
          <Sidedrawer show={this.state.sideDrawerOpen}/>
         {backdrop}
         <section className="logo-nav">
               <div className="logo">
                    <img 
                    className="Logo-icon"
                    src={Logo}
                    alt="Logo"
                    />
               </div>
          </section>
          
          
          <section>
               <div className="nav">
                    <ul>
                        <Link to="/Homepage"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/"><li>Register</li></Link>
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