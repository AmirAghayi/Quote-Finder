import React, { Component } from 'react';
import Frontbody from '../Frontbody/Frontbody';
import { Link } from 'react-router-dom';
import CarouselView from '../Carousel/CarouselView/CarouselView';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homepage.css';




class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotesList: [],
      userCreatedQuotes: []
    };
  }



  componentDidMount() {
    // this.getQuotes();
    this.getUserCreatedQuotes();
  }


  // getQuotes = () => {
  //   axios.get('https://favqs.com/api/quotes', { headers: { Authorization: `Token token="7e1cd958d0d8cfebace9c3d0e5c146e9"` } })
  //     .then(response => {
  //       console.log(response)
  //       this.setState({
  //         quotesList: response.data.quotes
  //       })
  //     })
  // }


  getUserCreatedQuotes = () => {

    axios.get('/api/userCreatedQuotes')
      .then(response => {
        console.log(response)
        this.setState({
          userCreatedQuotes: response.data
        })
      })
  }


  render() {

    const userCreatedQuotes = this.state.userCreatedQuotes.map(quote => {
      return (<Link
        to={`/quotes/${quote.id}`}
        className="homepage-slide">
          <div className="usercreated-card">
            <div className="usercreated-quotebody">"{quote.quotebody}"</div>

            <div className="usercreated-quoteauthor">{quote.author}</div>
          </div>
          </Link>
      )
    })

    return (
      <div className="Homepage" style={{ height: '100%' }}>
        <section className="carousel-container">
          <CarouselView />
        </section>

<section>
    <h1 className="homepage-about-title">About Quote-Finder</h1>
    <p className="homepage-about-text">This website Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deleniti doloribus dolore perspiciatis facere distinctio magnam deserunt eum unde numquam voluptatibus id consequatur laudantium iste architecto ullam nemo eius est! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sunt a ab eaque neque aut dolore quam quisquam quia nobis, esse provident non! Provident sint, minus quas voluptate adipisci illo.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quis sequi eveniet ex. Ipsum tempore laudantium enim, eaque deleniti eos quibusdam consequuntur reiciendis aspernatur cum saepe harum. Voluptatem, eveniet ex.</p>
</section>
       


        <section className="quote-cards-container">
          <Frontbody className="quote-card-container" quotes={this.state.quotesList} />
        </section>


        <section className="usercreated-quotes">
               {userCreatedQuotes}
        </section>


        <div className="footer-container">
          <Footer />
        </div>

      </div>

    )
  }

}




export default Homepage;