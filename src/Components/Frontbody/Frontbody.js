import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Frontbody.css';



class Frontbody extends Component {






  render() {
    return this.props.quotes.map((quote) => (

      <div className="quotes">
        <Link to={`/quotes/${this.props.quotes.id}`}>
          <h1>{quote.body}</h1>
          <div className="author">
            <h2>"{quote.author}"</h2>
          </div>
        </Link>
      </div>

    ))

  }

}




export default Frontbody;