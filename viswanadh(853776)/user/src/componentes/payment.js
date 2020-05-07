import React, { Component } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

class payment extends Component {
  state = { number: "", name: "", expiry: "", cvc: "", focus: "" };
  success = () => {
    this.props.history.push("/success");
  };
  render() {
    return (
      <div>
        <div className="container m-5">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                Credit/Debit card
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu1">
                Through Net Banking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu2">
                Cash On Delivery
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <div className="row m-2">
                <div className="col-md-6">
                  <Cards
                    number={this.state.number}
                    name={this.state.name}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focus}
                  />
                </div>
                <div className="col-md-6">
                  <form onSubmit={this.success}>
                    <input
                      type="tel"
                      placeholder="CARD NUMBER"
                      name="number"
                      value={this.state.number}
                      className="form-control m-2"
                      onChange={(e) => {
                        this.setState({ number: e.target.value });
                      }}
                      onFocus={(e) => {
                        this.setState({ focus: e.target.name });
                      }}
                      required
                    />

                    <input
                      type="tel"
                      className="form-control m-2"
                      placeholder="NAME"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      onFocus={(e) => {
                        this.setState({ focus: e.target.name });
                      }}
                      required
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="MM/YY"
                      name="expiry"
                      value={this.state.expiry}
                      onChange={(e) => {
                        this.setState({ expiry: e.target.value });
                      }}
                      onFocus={(e) => {
                        this.setState({ focus: e.target.name });
                      }}
                      required
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="CVV/CVC"
                      name="cvc"
                      value={this.state.cvc}
                      onChange={(e) => {
                        this.setState({ cvc: e.target.value });
                      }}
                      onFocus={(e) => {
                        this.setState({ focus: e.target.name });
                      }}
                      required
                    />
                    <button className="btn btn-outline-success block">
                      Proceed To Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <div className="row ">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <button
                    className="btn btn-outline-success "
                    onClick={this.success}
                  >
                    Click Here To Redirect To Your Banking Website
                  </button>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
            <div id="menu2" className="container tab-pane fade ">
              <div className="row ">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center m-2">
                  <button
                    className="btn btn-outline-success "
                    onClick={this.success}
                  >
                    Proceed To Confirm Cash On Delivery{" "}
                  </button>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default payment;
