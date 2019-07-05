import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './QuoteDetails.css';


class QuoteDetails extends Component {

    constructor() {
        super();

        this.state = {
            author: "",
            body: "",
            commentBody: "",
            comments: []
        }
    }




    // componentWillMount = () => {
    //     axios.get(`https://favqs.com/api/quotes/${this.props.match.params.id}`, { headers: {Authorization: `Token token="7e1cd958d0d8cfebace9c3d0e5c146e9"`}})
    //         .then(response => {
    //             this.setState({
    //                 author: response.data.author,
    //                 body: response.data.body
    //             });
    //         });

    //     this.getComments();

    // }



    componentWillMount = () => {
        axios.get(`/api/quotes/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    author: response.data.author,
                    body: response.data.quotebody
                });
            });

        this.getComments();

    }




    handleCommentBodyChange = (event) => {
        this.setState({
            commentBody: event.target.value
        })
    }





    resetState = () => {
        this.setState({
            commentBody: ""
        });
    };





    createComment = () => {
        const { commentBody } = this.state;
        const comment = { commentBody, quoteId: this.props.match.params.id };

        axios.post('/api/comment', comment)
            .then(response => {
                this.setState({
                    comments: response.data
                });
                this.resetState();
            });
    };


    getComments = () => {
        axios.get('/api/comments?quote_id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    comments: response.data
                })
            })
    }




    render() {

        const comments = this.state.comments.map(comment => {
            return (
                <section className="quote-details-commentbody-container">
                    <div className="quote-details-comments-username">
                        <p>Username:</p>
                    </div>

                    <div className="quote-details-commentbody-singlecomment">
                        <p>{comment.commentbody}</p>
                    </div>

                </section>
            )
        })
        return (
            <div className="quote-details-container">


                <form
                    onSubmit={e => e.preventDefault()}
                    className="modal"
                >
                    <Link to="/Homepage">
                        <span className="closeBtn">&times;</span>
                    </Link>

                    <div className="quote-body">
                        <h1> "{this.state.body}" </h1>
                    </div>
                    <div className="author">
                        <p className="author"> by {this.state.author} </p>
                    </div>


                    <hr />

                    <div className="quote-details-comments-section">
                        {comments}
                    </div>



                    <textarea
                        onChange={this.handleCommentBodyChange}
                        value={this.state.commentBody}
                        className="textarea"
                        type="textarea"
                        placeholder="Add a Comment" />
                    <button
                        onClick={this.createComment}
                        className="comment-btn"
                    >Post Comment</button>
                </form>

                <Footer />
            </div>
        )
    }



}



export default QuoteDetails;