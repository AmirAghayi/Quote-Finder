import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './PostDetails.css';


class PostDetails extends Component {

    constructor(){
        super();

        this.state = {
            title: "",
            image: "",
            content: "",
            author: "",
        }
    }

    componentWillMount = () => {
        axios.get(`/api/postdetails/${this.props.match.params.id}`)
        .then( response => {
             this.setState({
                 title: response.data.title,
                 image: response.data.imageurl,
                 content: response.data.content,
                 author: response.data.author
             });
        });
    
    
    
    }

    render(){
        return(
            <div className="post-details">


                <div className="nav-section">
                     <Navbar className="Nav" />
                </div>
  
                <div className="post-details-section">
                    <div className="title-and-image">
                        <div className="post-title">
                            <h1> {this.state.title} </h1>
                        </div>

                        <div className="post-image">
                            <img 
                            className="img-file"
                            src={this.state.image} />
                        </div>
                    </div>
                    
                    <div className="content">
                            <div className="post-username-section">  
                                    <div className="post-username">
                                        <p> by </p>
                                    </div>
                                    <p className="poster"> {this.state.user} </p>
                                    <img 
                                    className="profile"
                                    src={`https://robohash.org/${this.props.user}`}
                                    alt="profile"
                                    />
                           </div>

                           <div className="post-content">
                                    <p> {this.state.content} </p>
                            </div> 
                    </div>

                    
                    
                </div>
                                

               

           </div>
        )
    }



}



export default PostDetails;