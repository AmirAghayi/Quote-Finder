import React, { Component } from 'react';
import Logo from './image/Logo.png';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Backdrop from '../Backdrop/Backdrop';
import { Link, withRouter } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser} from '../../redux/reducer';  
import './Navbar.css';



class Navbar extends Component {
     constructor(props) {
          super(props);
      
          this.state = {
              sideDrawerOpen: false,
              profilePicture: "",
              user: ""      
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
     console.log(this.props)
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
                        <Link to="/Favorites"><li>Favorite Quotes</li></Link>
                        <Link to="/SearchByTopic"><li>Search By Topic</li></Link>
                        <Link to="/SearchByAuthor"><li>Search By Author</li></Link>
                        <Link to="/SubmitQuotes"><li>Submit a Quote</li></Link>
                        <Link to="/Contact Us" className="Contact"><li>Contact us</li></Link>
                        <a href="javascript:void(0)" onClick={() => {
                                axios.get('/logout')
                                   .then(() => {
                                        console.log(this.props)
                                      this.props.setUser('');
                                      this.props.history.push('/');
                                   }) .catch(err => {
                                   console.warn(err);
                                });
                        }}><li>Log Out</li></a>
                             
                             
                        <section className="navbar-username-icon-section">
                            <p className="navbar-username">{this.props.user}</p>
                            <MaterialIcon icon="person" color="white" />
                        </section>     
                        
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
      return {
           user: state.user
      };
}


export default withRouter(connect(mapStateToProps, {setUser})(Navbar));