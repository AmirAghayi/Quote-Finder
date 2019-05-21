import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/"><li>Register</li></Link>
                    <Link to="/Login"><li>Login</li></Link>
                    <Link to="/Contact Us"><li className="Contact">Contact us</li></Link>
                </ul>
            </div>

        </section>


)};




export default sideDrawer;