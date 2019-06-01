import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sidedrawer.css';



const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
          drawerClasses = 'side-drawer open';
    }


return(

        <section>
            <div className={drawerClasses}>
                <ul>
                <Link to="/Homepage"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Homepage"><li>Topics</li></Link>
                        <Link to="/Homepage"><li>Authors</li></Link>
                        <Link to="/Homepage"><li>Submit a Quote</li></Link>
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
                </ul>
            </div>

        </section>


)};




export default sideDrawer;