import React, { Component } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
import Axios from "axios";
class login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  handleFormSubmit=(event)=>{
    event.preventDefault();
    Axios.post(`/api/login?emailid=${this.state.account.username}&password=${this.state.account.password}`).then(res=>{
      if(res.status===200)
      {
      localStorage.setItem('userToken',res.data.token);
      localStorage.setItem('isauth',true)
      console.log(localStorage.userToken);
      this.props.history.push('/');
      window.location.reload(true);
      console.log(res.status)
      }
      if(res.data.err)
      {
        window.alert("user id / password mis match")
      }
      
    }).catch((err)=>{
      window.alert("user id / password mis match");
    })

  }
  handleInputField = (event) => {
    const account = this.state.account;
    account[event.currentTarget.name] = event.currentTarget.value;

    this.setState({ account: account });
    console.log(account);
  };
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3"></div>
          <div className="ss col-md-6 p-3 shadow border rounded blue-gradient color-block mt-5 text-cursive">
            <h1 className="text-center text-uppercase">Login</h1>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <Input
                  value={this.state.account.username}
                  inputName="username"
                  type="text"
                  handleInputField={this.handleInputField}
                  label="Username"
                  error={this.state.errors.username}
                />
              </div>
              <div className="form-group">
                <Input
                  inputName="password"
                  type="password"
                  handleInputField={this.handleInputField}
                  label="Password"
                  value={this.state.account.password}
                  error={this.state.errors.password}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-outline-primary btn-block rounded-pill"
              >
                Login
              </button>
            </form>
            <div className="text-center p-3">
              <small>
                <em className="text-danger">Don't have account? </em>
                <Link to="/register" className="text-decoration-none">
                  Register
                </Link>
              </small>
            </div>
            <div className="clearfix ">
              <div className="float-left ">
                <a href="!#" className="text-decoration-none">
                  Forget UserName?
                </a>
              </div>
              <div className="float-right">
                <a href="!#" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
