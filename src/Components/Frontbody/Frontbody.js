import React, { Component } from 'react';



class Frontbody extends Component {





render (){
  return(
    <div>
      {this.props.quotes.length > 0 ? this.props.quotes.map((quote) => (
        <div className="quotes"> 
          {quote.body}
        </div>
      )) : null}
          
    </div>
  )
  
  }

}




export default Frontbody;