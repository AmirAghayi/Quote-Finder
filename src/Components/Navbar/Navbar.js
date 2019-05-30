import React, { Component } from 'react';
import Logo from './image/Logo.png';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser} from '../../redux/reducer';  
import './Navbar.css';



class Navbar extends Component {
     constructor() {
          super();
      
          this.state = {
              sideDrawerOpen: false,
              profilePicture: ""      
          };
        }

          

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
                        <Link to="/Contact Us" className="Contact"><li>Contact us</li></Link>
                        <a href="javascript:void(0)" onClick={() => {
                                axios.get('/logout')
                                   .then(() => {
                                      this.props.setUser('');
                                      this.props.history.push('/');
                                   }) .catch(err => {
                                   console.warn(err);
                                });
                        }}><li>Log Out</li></a>
                             
                             
                             
                        <li>{this.props.username}</li>
                    </ul>
                </div>

         </section>


         <section className="carousel">
                
         </section>
    </div>
    
    )
  }

}

function mapStateToProps(state){
      return state;
}


export default connect(mapStateToProps, {setUser})(Navbar);