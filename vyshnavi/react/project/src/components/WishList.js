import React, { Component } from "react";

class WishList extends Component {
  state = {
    count: 0,
    products: [
      {
        id: "5c15",
        name: "Full Stack Developer",
        numberInStock: 6,
        price: 10000
      },
      {
        id: "5a16",
        name: "ReactJS",
        numberInStock: 5,
        price: 5000
      },
      {
        id: "5t17",
        name: "NodeJS",
        numberInStock: 8,
        price: 4000
      },
      {
        id: "6c18",
        name: "Modern JavaScript",
        numberInStock: 7,
        price: 3500
      },
      {
        id: "5d19",
        name: "HTML,CSS,RWD",
        numberInStock: 7,
        price: 4000
      },
      {
        id: "5a20",
        name: "MongoDB",
        numberInStock: 7,
        price: 3000
      },
      
    ]
  };
  render() {
    if (this.state.products.length == 0) {
      return <p className="alert alert-danger">Stock unavailable</p>;
    }
    return (
      <div>
        <span className="m-2 p-2 badge badge-primary">
          {this.state.products.length}
        </span>
        <h2>MY WISHIST</h2>
        <table className="table">
          
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>NumberInStock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(pds => (
              <tr>
                <td>{pds.id}</td>
                <td>{pds.name}</td>
                <td>{pds.numberInStock}</td>
                <td>{pds.price}</td>
                <td>
                  
                  <button
                    onClick={() => this.addtocart(pds)}
                    className="btn btn-success btn-sm"
                  >
                    AddToCart
                  </button>
                  </td>
                  <td>
                  <button
                    onClick={() => this.remove(pds)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  remove = pd => {
    const products = this.state.products.filter(pds => pd.id !== pds.id);
    this.setState({ products: products });
  };
  addtocart = pd => {
    const products = this.state.products.filter(pds => pd.id !== pds.id);
    this.setState({ products: products });
  };
}
export default WishList;
