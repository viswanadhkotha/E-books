import React, { Component } from "react";
import "./foo.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      
        <div className="bg-dark text-white">
          <div className="row">
            <div className="col-sm-6 text-center mt-2">
              <a href="/faq" className="btn text-primary">
                
                Frequently Asked Questions
              </a>
            </div>
            <div className="col-sm-6 text-center ">
              Follow us :
              <a href="/facebook.com">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm text-center pb-3">
              &copy; {new Date().getFullYear()} | E BOOK STORE INC | All
              Rights Reserved | Terms Of Service | Privacy
            </div>
          </div>
        </div>
      
    );
  }
}

export default Footer;
