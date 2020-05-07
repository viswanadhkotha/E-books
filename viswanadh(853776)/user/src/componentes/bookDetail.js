import React, { Component } from "react";
import Axios from "axios";
import jwt from "jsonwebtoken";
import { CopyToClipboard } from "react-copy-to-clipboard";
class bookdetail extends Component {
  state = {
    book: [],
    bookId: this.props.match.params.bookId,
  };
  addtocart = () => {
    let id = jwt.decode(localStorage.userToken);

    Axios.post(
      `/api/addtocart?bookid=${this.state.bookId}&userid=${id._id}&name=${this.state.book.NAME}&image=${this.state.book.image}&price=${this.state.book.PRICE}&qty=${1}`
    ).then((res) => {
      if (res.data.success) {
        alert("book added to cart");
        console.log(res.data.success);
      } else {
        alert("book already exist in cart");
        console.log(res.data.success);
      }
    });
  };
  addtowishlist = () => {
    let id = jwt.decode(localStorage.userToken);

    Axios.post(
      `/api/addtowishlist?bookid=${this.state.bookId}&userid=${id._id}&name=${this.state.book.NAME}&image=${this.state.book.image}&price=${this.state.book.PRICE}`
    ).then((res) => {
      if (res.data.success) {
        window.alert("book added to wishlist");
        console.log(res.data.success);
      } else {
        window.alert("book already exist in wishlist");
        console.log(res.data.success);
      }
    });
  };
  componentDidMount() {
    Axios.get(`/api/book/book_by_id?id=${this.state.bookId}&type=single`).then(
      (response) => {
        this.setState({ book: response.data.product });
        console.log(response.data.product);
        console.log(this.state.book);
      }
    );
  }

  render() {
    const url = window.location.href;
    return (
      <div>
        <div className="row m-5">
          <div className="col-md-4">
            <img
            className="img-fluid"
              height="500"
              src={this.state.book.image}
              alt="product img"
            />
          </div>
          <div className="col-md-8">
            <h1>{this.state.book.NAME}</h1>
            <h4> BY {this.state.book.AUTHOR}</h4>
            <h4> PRICE : {this.state.book.PRICE}</h4>
            <h4> PAGES : {this.state.book.PAGES}</h4>
            <h4> PUBLISHED DATE : {this.state.book.PUBLISHEDDATE}</h4>
            <p className="text-justify"> Description :{this.state.book.DESCRIPTION}</p>
            <div className="col text-center">
              <button
                className="btn btn-outline-warning mt-5 m-1"
                onClick={this.addtowishlist}
              >
                ADD TO WISH LIST
              </button>
              <button
                className="btn btn-outline-success mt-5 m-1"
                onClick={this.addtocart}
              >
                ADD TO CART
              </button>

              <CopyToClipboard text={url}>
                <button
                  className="btn btn-outline-primary mt-5 m-1"
                  onClick={() => {
                    window.alert("url has been copied");
                  }}
                >
                  SHARE
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bookdetail;
