import React, { Component } from 'react';
import './Frontbody.css';



class Frontbody extends Component {





render (){
  return this.props.quotes.map((quote) => (
        <div className="quotes"> 
          <h1>{quote.body}</h1>
            <div className="author">
            <h2>"{quote.author}"</h2>
            </div>
        </div>
  ))
  
  }

}




export default Frontbody;