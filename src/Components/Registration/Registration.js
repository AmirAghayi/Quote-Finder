import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Logo from '../Navbar/image/Logo.png';
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
      registerMessage: "",
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

  resetState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      username: "",
      password: "",
      error: "",
      registerMessage: "",
    });
  };




  createUser = () => {
    const {firstName,lastName,emailAddress,phoneNumber,username,password} = this.state;
    const user = {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      username,
      password
    };
    this.setState({
      error: ""
    });
    let validation = this.renderAlert();
    if (validation) {
      axios.post("/register", user).then(response => {
        console.log(response.data);
        this.props.history.push("/");
        this.resetState();
      });
      this.resetState();
      this.setState({
        registerMessage: swal("Registered Successfully!","Quote Finder","success")
      });
    } else {
      this.setState({
        error: swal("Error","Fill out ALL the required fields", "warning")
      });
    }
  };




  renderAlert = () => {
    return this.state.firstName === "" ||
    this.state.lastName === "" ||
    this.state.emailAddress === "" ||
    this.state.phoneNumber === "" ||
    this.state.username === "" || 
    this.state.password === ""  ? false  : true;
  };





  render() {
    return (
      <div className="auth-container">

        <div className="auth">


          {/* {this.state.error ? (
              <p className="error-message">{this.state.error.data}</p>
            ) : (
              <p className="register-message">{this.state.registerMessage}</p>
            )} */}

          <section className="register-form">
            <img
              className="logo-icon"
              src={Logo}
              alt="Logo" />
            <div className="firstname">
              <input
                className="first-name-input"
                placeholder="First Name"
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstnameChange}
              />
            </div>

            <div className="lastname">
              <input
                className="last-name-input"
                placeholder="Last Name"
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastnameChange}
              />
            </div>

            <div className="email">
              <input
                className="email-input"
                placeholder="Email Address"
                type="text"
                value={this.state.emailAddress}
                onChange={this.handleEmailChange}
              />
            </div>


            <div className="phone">
              <input
                className="phone-input"
                placeholder="Phone Number"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneChange}
              />
            </div>



            <div className="username">
              <input
                className="username-input"
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>

            <div className="password">
              <input
                className="password-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>

            <div className="buttons">
              <Link className="register-button" to="/" onClick={this.createUser}>
                <p className="signup-text">sign up</p>
              </Link>

              <Link className="login-button" to="/Login">
                <p className="Login-text">Login</p>
              </Link>
            </div>

          </section>




        </div>
      </div>
    );
  }
}





export default Registration;



