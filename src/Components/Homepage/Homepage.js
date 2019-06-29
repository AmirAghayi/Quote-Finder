import React, { Component } from 'react';
import Frontbody from '../Frontbody/Frontbody';
import CarouselView from '../Carousel/CarouselView/CarouselView';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homepage.css';




class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotesList: [],
      quotebody:"",
      author:""
    };
  }



  componentDidMount() {
    this.getQuotes();
    this.getUserCreatedQuotes();
  }


  getQuotes = () => {
    axios.get('https://favqs.com/api/quotes', { headers: { Authorization: `Token token="7e1cd958d0d8cfebace9c3d0e5c146e9"` } })
      .then(response => {
        console.log(response)
        this.setState({
          quotesList: response.data.quotes
        })
      })
  }


getUserCreatedQuotes = () => {
  const { quotebody, author } = this.state;
  const userCreatedQuote = { quotebody,author}
  axios.get('/api/userCreatedQuotes', userCreatedQuote)
      .then(response => {
        console.log(response)
        this.setState({
          quotebody: response.data.quotebody,
          author: response.data.author
        })
      })
}


  render() {


    return (
      <div className="Homepage" style={{ height: '100%' }}>
        <section className="carousel-container">
          <CarouselView />
        </section>

        <section className="quote-cards-container">
          <Frontbody className="quote-card-container" quotes={this.state.quotesList} />
        </section>


        <section className="usercreated-quotes">
          <div className="usercreated-card">
              <div className="usercreated-quotebody">{this.state.quotebody}</div>
              <div className="usercreated-quoteauthor">{this.state.author}</div>
          </div>
        </section>


        <div className="footer-container">
          <Footer />
        </div>

      </div>

    )
  }

}




export default Homepage;