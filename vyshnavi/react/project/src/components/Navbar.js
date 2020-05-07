import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>

    )

    const userLink = (
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/wishlist" className="nav-link">
            WishList
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            My Orders
          </Link>
        </li>
        <li
            className="nav-item"
            style={{ marginLeft: "920px", marginRight: "10px" }}
          ></li>
        <li className="nav-item mr-3" style={{ color: "white" }}>
            <i className="fas fa-shopping-cart"></i>
        </li>
        <li className="nav-item">
            0
            <span
              className="badge badge-secondary"
              id={"swa"}
              style={{ color: "blue" }}
            >
              {this.props.total}
            </span>
            <span></span>
          </li>
        <li className="nav-item mr-auto">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-left"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)