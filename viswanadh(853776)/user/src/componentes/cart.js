import React, { Component } from "react";
import Axios from "axios";
import jwt from "jsonwebtoken";

class cart extends Component {
  state = {
    items: [],
    totalprice: 0,
  };
  /*get data of cart */
  async componentDidMount() {
    if (!localStorage.userToken) {
      window.alert("please login");
    } else {
      let id = jwt.decode(localStorage.userToken);
      await Axios.get(`api/cart?id=${id._id}`).then(async (res) => {
        if (!res.data.success) {
          window.alert("no items in cart");
        } else {
          this.setState({ items: res.data.cart });
          console.log(this.state.items);
        }
      });
    }

    this.calc();
    //console.log(totalprice);
  }
  /*total price */
  calc() {
    let totalprice = 0;
    this.state.items.forEach((m, index) => {
      //console.log(index);

      totalprice = totalprice + parseInt(m.price) * parseInt(m.qty);
    });
    this.setState({ totalprice });
  }
  /*redirect to payment page */
  success = () => {
    this.deleteAll();
    this.props.history.push("/payment");
  };
  /*delete cart item */
  delete = (bid) => {
    let id = jwt.decode(localStorage.userToken);
    console.log("delete called");
    Axios.delete(`/api/removefromcart?id=${id._id}&bookid=${bid}`).then(
      (res) => {
        if (res.data.success) {
          /*var items=this.state.items;
          var it=items.filter((m)=>{m.id!=bid})*/

          console.log(res.data);
          console.log(this.state.items);
          this.setState({ items: res.data.cart });

          console.log("deleted");
          this.calc();
        } else {
          window.alert("unable to delete");
        }
      }
    );
  };
  /*delete all cart items */
  deleteAll = () => {
    let id = jwt.decode(localStorage.userToken);
    console.log("delete called");
    Axios.delete(`/api/removeallfromcart?id=${id._id}`).then((res) => {
      if (res.data.success) {
        /*var items=this.state.items;
          var it=items.filter((m)=>{m.id!=bid})*/

        console.log(res.data);
        console.log(this.state.items);
        this.setState({ items: res.data.cart });

        console.log("deleted");
        this.calc();
      } else {
        window.alert("unable to delete");
      }
    });
  };
  /*decrement func */
  dec = (id) => {
    let s = this.state.items;
    if (s[id].qty > 1) {
      s[id].qty = parseInt(s[id].qty) - 1;
      this.setState({ items: s });
      this.calc();
    }
  };
  /*increment func */

  inc = (id) => {
    let s = this.state.items;
    s[id].qty = parseInt(s[id].qty) + 1;
    this.setState({ items: s });
    this.calc();
  };
  render() {
    const renderproducts = this.state.items.map((m, index) => {
      console.log(m, index);

      return (
        <tr key={m.id} className=" text-center">
          <td className="align-middle ">
            <img src={m.image} alt="book" width="40" height="50" />
          </td>
          <td className="align-middle">{m.name}</td>
          <td className="align-middle">{m.price}</td>
          <td className="align-middle ">
            <div className="d-flex justify-content-center">
              <span
                className="btn btn-outline-dark mx-1"
                onClick={() => {
                  this.dec(index);
                }}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{m.qty}</span>
              <span
                className="btn btn-outline-dark mx-1"
                onClick={() => {
                  this.inc(index);
                }}
              >
                +
              </span>
            </div>
          </td>
          <td className="align-middle">{m.price * m.qty}</td>
          <td className="align-middle">
            <span
              className="btn text-danger fa fa-trash"
              style={{ fontSize: 20 }}
              onClick={() => this.delete(m.id)}
            ></span>
          </td>
        </tr>
      );
    });
    return (
      <div>
        {this.state.items.length === 0 ? (
          <div className="text-center">
            <h2>No products yet</h2>
          </div>
        ) : (
          <div>
            <table className="table text-center">
              <thead>
                <tr className=" align-middle">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>{renderproducts}</tbody>
            </table>
            <div className="text-center">
              <h4>Total Price: {this.state.totalprice}</h4>
            </div>
            <div className="text-center m-5">
              <button
                className="btn btn-outline-danger m-2 "
                onClick={this.deleteAll}
              >
                Delete All
              </button>
              <button
                className="btn btn-outline-success "
                onClick={this.success}
              >
                Proceed To Pay
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default cart;
