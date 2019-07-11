import React, { Component } from 'react';
import axios from 'axios';




class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commentBody: props.comment.commentbody,
            commentEdit: "",
            editmode: false
        }
    }

    editComment() {
        this.setState({
            commentEdit: this.state.commentBody,
            editmode: true
        })
    }


    cancelEdit() {
        this.setState({
            commentEdit: "",
            editmode: false
        })
    }


    saveComment = () => {
        axios.patch(`/api/comments/${this.props.comment.id}`, { commentBody: this.state.commentEdit })
            .then(response =>
                this.setState({
                    commentEdit: "",
                    editmode: false,
                    commentBody: response.data.commentbody
                })
            )
    }


    updateEdit = (event) => {
        this.setState({
            commentEdit: event.target.value
        })
    }


    render() {
        return (
            <section className="comments-section">
                <span className="quote-details-commentbody-username-container">
                    <div className="quote-details-comments-username">
                        <p>Username: {this.props.comment.username}</p>
                    </div>

                    <div className="quote-details-commentbody-singlecomment">
                        {
                            this.state.editmode ?
                                <textarea
                                    value={this.state.commentEdit}
                                    onChange={this.updateEdit}
                                ></textarea>
                                :
                                <p>{this.state.commentBody}</p>
                        }
                    </div>
                </span>

                <span className="quote-details-comment-functions">
                    {
                        this.state.editmode ?
                            <div className="delete-edit-btns">
                                <button
                                    className="delete-btn"
                                    onClick={e => this.saveComment()}>save</button>
                                <button
                                    className=""
                                    onClick={e => this.cancelEdit()}>Cancel</button>
                            </div>
                            :
                            <div className="delete-edit-btns">
                                <button
                                    className="delete-btn"
                                    onClick={e => this.editComment()}>Edit</button>
                                <button
                                    className=""
                                    onClick={e => this.props.deleteComment(this.props.comment.id)}>Delete</button>
                            </div>
                    }

                </span>

            </section>
        )
    }




}








export default Comment;