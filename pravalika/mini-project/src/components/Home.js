
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cart from './cart.png';
import { Link } from 'react-router-dom';
import bookImage from './Fasttrack.jpg';
import Axios from 'axios';

class Home extends React.Component {
  state = {
    data: [],
    message: null,
    singleDataObj: [],
    isHeading: true
  };
  // This method is used to get the data from db based on button click
  getDetails = (buttonName) => {
    if (buttonName === 'Most Popular Books') {
      this.getMostPopularData();
    }
    if (buttonName === 'New Releases') {
      this.getNewReleases();
    }
    if (buttonName === 'Mixed collections books list') {
      this.getMixedCollections();
    }
    if (buttonName === 'Books list based on Authors') {
      this.getAuthors();
    }
    if (buttonName === 'Search') {
      this.getSearch();
    }
  }
  // This method is used to get the Most Popular Books Data
  getMostPopularData() {
    Axios.get('http://localhost:3002/api/Books/NAME')
      .then((response) => {
        const data = response.data.result;
        console.log('getMostPopularData : ' , response.data.result);
        this.setState({ data: data });
      })
      .catch(() => {
        alert('error');
      });
  }
  // This method is used to get the New Releases Data
  getNewReleases() {
    Axios.get('http://localhost:3002/api/Books/NEW')
      .then((response) => {
        const data = response.data.result;
        console.log('getNewReleases : ' , response.data.result);
        this.setState({ data: data });
      })
      .catch(() => {
        alert('error');
      });
  }
  // This method is used to get the Mixed Collections Books Data
  getMixedCollections() {
    Axios.get('http://localhost:3002/api/Books/MIXED')
      .then((response) => {
        const data = response.data.result;
        console.log('getMixedCollections : ' , response.data.result);
        this.setState({ data: data });
      })
      .catch(() => {
        alert('error');
      });
  }
  //This method is used to get the data based on Authors
  getAuthors() {
    Axios.get('http://localhost:3002/api/Books/AUTHOR')
      .then((response) => {
        const data = response.data.result;
        console.log('getAuthors : ' , response.data.result);
        this.setState({ data: data });
      })
      .catch(() => {
        alert('error');
      });
  }
  //This method is used to search th books data
  getSearch() {
    var inputValue = null;
    if (this.refs.myInput !== null) {
      var input = this.refs.myInput;
      inputValue = input.value;

      Axios.get('http://localhost:3002/api/Books/BOOKNAME', {
        params: {
          NAME: inputValue
        }
      })
        .then((response) => {
          const data = response.data.result;
          console.log('search :', data);
          this.setState({ data: data });
        })
        .catch((error) => {
          alert('error', error);
        });
    }

  }

  render() {
    const navStyle = {
      color: 'white',
      fontSize: '18px'
    }
    //This is to format the UI based on results
    console.log('length : ', this.state.data.length);
    var booksData = this.state.data.map(book => (
      <div style={{ border: "0.5px solid black", padding: "10px" }} className="row" key={book._id}>
        <div className="col-lg-3">
          <img src={bookImage} alt="img" height="150" width="150"></img>
        </div>
        <div className="col-lg-4" >
          <p><b>ID:</b> {book._id}</p>
          <p><b>NAME:</b> {book.NAME}</p>
          <p><b>CATEGORY:</b> {book.CATEGORY}</p>
          <p><b>DESCRIPTION:</b> {book.DESCRIPTION}</p>
          <p><b>AUTHOR:</b> {book.AUTHOR}</p>
          <p><b>RATING:</b> {book.RATING}</p>
          <p><b>PUBLISHED DATE:</b> {book.PUBLISHEDDATE}</p>
          <p><b>PRICE:</b> {book.PRICE}</p>
        </div>
      </div>
    ));

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="navbar-brand">
            Online BookStore
        </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li style={{ padding: "10px" }} className="nav-item">
                <Link to="/Home" style={navStyle}>
                  Home
              </Link>
              </li>
              <li style={{ padding: "10px" }} className="nav-item">
                <Link to="/Books" style={navStyle}>
                  Books
              </Link>
              </li>
              <li style={{ padding: "10px" }} className="nav-item">
                <Link to="/Login" style={navStyle}>
                  Login
              </Link>
              </li>
              <li style={{ padding: "10px" }} className="nav-item">
                <Link to="/Register" style={navStyle}>
                  Register
              </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref="myInput"
              />
              <button onClick={() => this.getDetails('Search')} className="btn btn-outline-warning my-2 my-sm-0" type="submit">
                Search
            </button>
            </form>
            <li style={{ padding: "10px" }} className="nav-item">
              <Link to="/Cart" style={navStyle}>
                <img src={cart} alt="img" height="30" width="30"></img>
              </Link>
            </li>
          </div>
        </nav>
        <div className="row">
          <div className="col-3">
            <div className="list-group">
              <button type="button" onClick={() => this.getDetails('Most Popular Books')} className="list-group-item list-group-item-action ">Most Popular Books</button>
              <button type="button" onClick={() => this.getDetails('New Releases')} className="list-group-item list-group-item-action">New Releases</button>
              <button type="button" onClick={() => this.getDetails('Mixed collections books list')} className="list-group-item list-group-item-action">Mixed collections books list</button>
              <button type="button" onClick={() => this.getDetails('Books list based on Authors')} className="list-group-item list-group-item-action">Books list based on Authors</button>
            </div>
          </div>
          <div>{booksData}</div>
        </div>
      </div>
    );
  }
}
export default Home;
