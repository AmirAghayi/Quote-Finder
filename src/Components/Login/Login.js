import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css';



class Login extends Component {
      constructor() {
        super();

        this.state = {
          username: "",
          password: "",
          error: "",
          registerMessage: ""
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





  // loginUser = () => {
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
  //     axios.post("/auth/login", user)
  //       .then(response => {
  //           console.log('response',response.data)
  //         this.props.setUser(response.data.user.username);

  //         this.props.history.push("/Dashboard");
  //       })
  //       .catch(err => {
  //         console.log("this is error in login user", err);
  //         this.setState({
  //           error: {data:err.response.data.message}
  //         });
  //       });
  //   } else {
  //     this.setState({
  //       error: { data: "Username and Password Required!" }
  //     });
  //   }
  // };





render (){
  return (
    <div className="login">
            <Navbar />
            <div className="title">
              <h1>Login</h1>
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

            <button className="login-button" onClick={() => this.loginUser()}>
              Login
            </button>
    </div>
    
    )
  }

}




export default Login;