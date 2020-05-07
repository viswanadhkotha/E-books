import React, { Component } from "react";
import Axios from "axios";
import jwt from "jsonwebtoken";
class profile extends Component {
  state = {
    data: "",
  };
  componentDidMount() {
    if (!localStorage.userToken) {
      this.props.history.push("/login");
    } else {
      let id = jwt.decode(localStorage.userToken);
      Axios.get(`api/profile?id=${id._id}`).then((res) => {
        if (res.data.success) {
          this.setState({ data: res.data.user });
          console.log(this.state.data);
        }
      });
    }
  }
  render() {
    return (
      <div>
        
        <div className="jumbotron jumbotron-fluid m-5">
          <div className="text-center text-uppercase">
          <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="profile"
          height="100px"
          className="rounded-circle m-2"
        />
            <h1 className="display-4">Profile</h1>
            

            <table className="table table-borderless text-center">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{this.state.data.firstname}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.data.lastname}</td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>{this.state.data.emailid}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{this.state.data.mobile}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
