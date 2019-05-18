import React from 'react';
import './DrawerToggleButton.css';



const DrawerToggleButton = props => (

       <button className="toggle-btn" onClick={props.click}>
            <div className="toggle-btn-line"/>
            <div className="toggle-btn-line"/>
            <div className="toggle-btn-line"/>

       </button>



)



export default DrawerToggleButton;