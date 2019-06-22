import React, { Component } from 'react';
import Frontbody from '../Frontbody/Frontbody';
import CarouselView from '../Carousel/CarouselView/CarouselView';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homepage.css';




class Homepage extends Component {
  constructor(props){
    super(props);

    this.state = {
       quotesList: []
    };
  }



componentDidMount(){
  this.getQuotes();
}


getQuotes = () => {
   axios.get('https://favqs.com/api/quotes', { headers: {Authorization: `Token token="7e1cd958d0d8cfebace9c3d0e5c146e9"`}})
   .then(response => {
     console.log(response)
     this.setState({
       quotesList: response.data.quotes
     })
   })
}


render (){
  

  return (
    <div className="Homepage" style={{height: '100%'}}>
         <CarouselView />
         <Frontbody className="quote-card-container" quotes={this.state.quotesList}/>
         <Footer />
    </div>
    
    )
  }

}




export default Homepage;