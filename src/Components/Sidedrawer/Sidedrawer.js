import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../redux/reducer';
import MaterialIcon from 'material-icons-react';
import axios from 'axios';
import './Sidedrawer.css';



class sideDrawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ""
        };
    }




    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }




        return (

            <section>
                <div className={drawerClasses}>
                    <ul>
                        <section className="side-drawer-username-icon-section">
                            <MaterialIcon icon="person" color="white" />
                            <p className="sidedrawer-username">{this.props.user}</p>
                        </section>
                      
                        <Link to="/Homepage"><li>Home</li></Link>
                        <Link to="/Favorites"><li>Favorite Quotes</li></Link>
                        <Link to="/SearchByTopic"><li>Search By Topic</li></Link>
                        <Link to="/SearchByAuthor"><li>Search By Author</li></Link>
                        <Link to="/SubmitQuotes"><li>Submit a Quote</li></Link>
                        <Link to="/Contact Us" className="Contact"><li>Contact us</li></Link>
                        <a href="javascript:void(0)" onClick={() => {
                            axios.get('/logout')
                                .then(() => {
                                    console.log(this.props)
                                    this.props.setUser('');
                                    this.props.history.push('/');
                                }).catch(err => {
                                    console.warn(err);
                                });
                        }}><li>Log Out</li></a>
                    </ul>
                </div>

            </section>


        )
    }
};




function mapStateToProps(state) {
    return {
        user: state.user
    };
}


export default withRouter(connect(mapStateToProps, { setUser })(sideDrawer));