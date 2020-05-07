import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    isauth: false,
  };
  componentDidMount() {
    if (localStorage.userToken) {
      this.setState({ isauth: true });
    } else {
      this.setState({ isauth: false });
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand" href="/">
            <div>E Bookstore</div>
            <div></div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav navbar-right ">
              {localStorage.userToken && (
                <li className="nav-item dropdown mr-5">
                  <Link
                    className="nav-link dropdown-toggle fa fa-user-circle"
                    style={{fontSize:20}}
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    
                  ></Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/profile">
                      profile
                    </NavLink>
                    <NavLink className="dropdown-item" to="/wishlist">
                      My Wish List
                    </NavLink>
                    <NavLink className="dropdown-item" to="/myorders">
                      My Orders
                    </NavLink>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                    
                    
                  </div>
                </li>
              )}
              {localStorage.userToken && (
                <li className="nav-item mr-3 ">
                  
                  <NavLink
                    className="nav-link fa fa-shopping-cart"
                    style={{fontSize:20}}
                    to="/cart"
                  ></NavLink>
                </li>
              )}

              {!localStorage.userToken && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              )}

              {!localStorage.userToken && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login {console.log(localStorage.userToken)}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
