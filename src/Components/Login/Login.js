import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Logo from '../Navbar/image/Logo.png';
import swal from 'sweetalert';
import './Login.css';



class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
    };
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
      username: "",
      password: "",
      error: ""
    });
  };



  loginUser = () => {
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.setState({
      error: ""
    });
    let validation = this.renderAlert();
    if (validation) {
      axios.post("/login", user)
        .then(response => {
            console.log('response',response.data)
          this.props.setUser(response.data.user.username);

          this.props.history.push("/Homepage");
        })
        .catch(err => {
          console.log("this is error in login user", err);
          this.setState({
            error: {data:err.response.data.message}
          });
        });
    } else {
      this.setState({
        error: swal("Error","username or password missing", "warning")
      });
    }
  };


  renderAlert = () => {
    return this.state.username === "" || this.state.password === ""  ? false : true;
  };



  render() {
    return (
      <div className="login">
        <div className="Login-container">
          <section className="login-form">
            <Link to="/">
              <img
              className="logo-icon"
              src={Logo}
              alt="Logo" />
              </Link>
            <div className="title">
              <h1>Login</h1>
            </div>

            <div className="username">
              <input
                className="login-username-input"
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>

            <div className="password">
              <input
                className="login-password-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>

            <Link className="login-btn" onClick={this.loginUser}>
              <p className="Login-text">Login</p>
            </Link>

          </section>
        </div>
      </div>

    )
  }

}




export default Login;