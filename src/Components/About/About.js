import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';



class About extends Component {





render (){
  return (
    <div className="About">
        
          <Navbar />
          
      
          <p className="about-title">ABOUT US</p>
          <hr className="line"/>
          <p className="about-para">This website Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deleniti doloribus dolore perspiciatis facere distinctio magnam deserunt eum unde numquam voluptatibus id consequatur laudantium iste architecto ullam nemo eius est! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus sunt a ab eaque neque aut dolore quam quisquam quia nobis, esse provident non! Provident sint, minus quas voluptate adipisci illo.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quis sequi eveniet ex. Ipsum tempore laudantium enim, eaque deleniti eos quibusdam consequuntur reiciendis aspernatur cum saepe harum. Voluptatem, eveniet ex.</p>
          <Footer />
    </div>
             
    )
  }

}




export default About;