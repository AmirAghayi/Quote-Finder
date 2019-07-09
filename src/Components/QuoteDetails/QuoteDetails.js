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
            comments: [],
            replies: ""
        }
    }


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


    editComment = (id) => {
        axios.patch(`api/comments/${id}`)
            .then(res => this.props.history.push('/Homepage'))
    }

    deleteComment = (id) => {
        axios.delete(`/api/comments/${id}`)
            .then(res => this.getComments());
    }

    replyComment = () => {

        axios.post('/api/reply')
    }



    render() {

        const comments = this.state.comments.map(comment => {
            return (
                <section className="comments-section">
                    <Navbar />
                    <span className="quote-details-commentbody-username-container">
                        <div className="quote-details-comments-username">
                            <p>Username:</p>
                        </div>

                        <div className="quote-details-commentbody-singlecomment">
                            <p>{comment.commentbody}</p>
                        </div>
                    </span>

                    <span className="quote-details-comment-functions">
                        <select>
                            <option onClick={this.editComment}>Edit</option>
                            <option onChange={this.deleteComment}>Delete</option>
                        </select>
                    </span>

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