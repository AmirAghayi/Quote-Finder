import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import QuoteSubmitForm from './Components/QuoteSubmitForm/QuoteSubmitForm';
import Contact from './Components/Contact/Contact';
import QuoteDetails from './Components/QuoteDetails/QuoteDetails';
import SearchByAuthor from './Components/SearchByAuthor/SearchByAuthor';
import SearchByTopic from './Components/SearchByTopic/SearchByTopic';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';





export default (
    <div>
        <Route component={Navbar} path="/Homepage"/>
        <Switch>
            <Route component={Registration} exact path="/"/>
            <Route component={About} path="/About" />
            <Route component={Homepage} path="/Homepage" />
            <Route component={Login} path="/Login" />
            <Route component={QuoteSubmitForm} path="/SubmitQuotes" />
            <Route component={Contact} path="/Contact Us" />
            <Route component={QuoteDetails} path="/quotes/:id" />
            <Route component={SearchByAuthor} path="/SearchByAuthor" />
            <Route component={SearchByTopic} path="/SearchByTopic" />
        </Switch>
    </div>
   






)