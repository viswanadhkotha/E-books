import React, { Component } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
class credit extends Component {
  state = { number: '', name: null, expiry: null, cvv: '',focus:'' };
  render() {
    return (
      <div>
          <Cards number={this.state.number} name={this.state.name} expiry={this.state.expiry} cvc={this.state.cvv} />
        <form>
          <input
            type='tel'
            placeholder="card number"
            name="number"
            value={this.state.number}
            onChange={(e) => {
              this.setState({ number: e.target.value })
            }}
            onFocus={(e)=>{this.setState({focus:e.target.name})}}
            
          />
          <input
            type='text'
            placeholder="NAME"
            name="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
            onFocus={(e)=>{this.setState({focus:e.target.name})}}
            
          />

          
        </form>
      </div>
    );
  }
}

export default credit;
