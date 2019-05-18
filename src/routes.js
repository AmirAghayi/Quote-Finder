import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
        <Route component={Homepage} exact path="/"/>
        <Route component={About} path="/About" />
        <Route component={Registration} path="/Registration" />
        <Route component={Login} path="/Login" />
        <Route component={Contact} path="/Contact Us" />
    </Switch>






)