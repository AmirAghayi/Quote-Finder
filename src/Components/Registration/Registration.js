import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Registration.css';



class Registration extends Component {
    constructor() {
      super();
  
      this.state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        username: "",
        password: "",
        error: "",
        registerMessage: ""
      };
    }
  

    handleFirstnameChange = e => {
      this.setState({
        firstName: e.target.value
      });
    }

    handleLastnameChange = e => {
      this.setState({
        lastName: e.target.value
      });
    }


    handleEmailChange = e => {
      this.setState({
        emailAddress: e.target.value
      });
    }

    handlePhoneChange = e => {
      this.setState({
        phoneNumber: e.target.value
      });
    }

    handleUsernameChange = e => {
      this.setState({
        username: e.target.value
      });
    };
  
    handlePasswordChange = e => {
      this.setState({
        password: e.target.value
      });
    };
  
    // resetState = () => {
    //   this.setState({
    //     username: "",
    //     password: ""
    //   });
    // };
  
  
  
  
    // createUser = () => {
    //   const { username, password } = this.state;
    //   const user = {
    //     username,
    //     password
    //   };
    //   this.setState({
    //     error: ""
    //   });
    //   let validation = this.renderAlert();
    //   if (validation) {
    //     axios.post("/auth/register", user).then(response => {
    //       console.log(response.data);
    //       this.props.history.push("/");
    //       this.resetState();
    //     });
    //     this.resetState();
    //     this.setState({
    //       registerMessage: "Registered Successfully!"
    //     });
    //   } else {
    //     this.setState({
    //       error: { data: "Username and Password Required!" }
    //     });
    //   }
    // };
  
  
  
  
    // renderAlert = () => {
    //   return this.state.username === "" || this.state.password === ""
    //     ? false
    //     : true;
    // };
  
  
  
  
  
    render() {
      return (
        <div className="auth-container">
           <Navbar />
          <div className="auth">
            
  
            <div className="title">
              <h1>Registeration</h1>
            </div>
  
            {/* {this.state.error ? (
              <p className="error-message">{this.state.error.data}</p>
            ) : (
              <p>{this.state.registerMessage}</p>
            )} */}
  

           <div className="firstname">
              <p className="first-name">First Name:</p>
              <input
                className="first-name-input"
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstnameChange}
              />
            </div>

            <div className="lastname">
              <p className="last-name">Last Name:</p>
              <input
                className="last-name-input"
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastnameChange}
              />
            </div>

            <div className="email">
              <p className="email-address">Email Address:</p>
              <input
                className="email-input"
                type="text"
                value={this.state.emailAddress}
                onChange={this.handleEmailChange}
              />
            </div>
            

            <div className="phone">
              <p className="phone-number">Phone Number:</p>
              <input
                className="phone-input"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneChange}
              />
            </div>

            

            <div className="username">
              <p className="username-title">Username:</p>
              <input
                className="username-input"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
  
            <div className="password">
              <p className="password-title">Password:</p>
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
  
            <div className="buttons">
              <Link className="register-button" to="/" onClick={this.createUser}>
                Register
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    const { UsernameType } = state;
    return {
      UsernameType
    };
  }
  
  export default Registration;
  


