
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import {Link } from 'react-router-dom';
import bookImage from './Fasttrack.jpg' ;

class Books extends Component{
  state={
    data: [],
    message:null,
    activeStyle : 'active',
    singleDataObj : []
  };

  //This method is used to get all books
  getBooks = () => {
    Axios.get('http://localhost:3002/api/Books')
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        this.setState({data :data});
      }
    )
      .catch(() => {
        alert('error');
      }
    );
  }
  //This method will call all the books data when component loads   
  componentDidMount(){
    this.getBooks();
  }
// This method is used to get the data from db based on button click
  getDetails = (buttonName) => {
  this.setState({
    message: buttonName
  })
  if(buttonName === 'Search'){
    this.getSearch();
  }  
  //Here it calls  the books data based on category
  Axios.get('http://localhost:3002/api/Books/CATEGORY', {
    params: {
      CATEGORY: buttonName
    }
    })
    .then((response) => {
      const sindata = response.data.result;
        console.log('sindata :' ,sindata);
        this.setState({data :sindata});
    })
    .catch((error) => {
        alert('error',error);
    });
  }
  //This method calls tha book based on BOOKNAME that has given in th search bar
  getSearch(){
    var inputValue = null;
    if (this.refs.myInput !== null) {
      var input = this.refs.myInput;
      inputValue = input.value;
      alert("Input is : " + inputValue);
      Axios.get('http://localhost:3002/api/Books/BOOKNAME', {
        params: {
          NAME: inputValue
        }
      })
      .then((response) => {
        const sindata = response.data.result;
          console.log('search Data :' ,sindata);
          this.setState({data :sindata});
      })
      .catch((error) => {
          alert('error',error);
      });
    }
  }
     
    
  render(){
    const navStyle = {
      color: 'white',
      fontSize: '18px'
    }

    var booksData = this.state.data.map(book => (
      <div style={{ border: "0.5px solid black" , padding: "10px"}} className="row" key={book._id}>
        <div className="col-lg-3">
          <img src={bookImage} alt="Smiley face"  height="150" width="150"></img>
        </div>
        <div className="col-lg-6" >
          <p><b>ID:</b> {book._id}</p>
          <p><b>NAME:</b> {book.NAME}</p>
          <p><b>CATEGORY:</b> {book.CATEGORY}</p>
          <p><b>DESCRIPTION:</b> {book.DESCRIPTION}</p>
          <p><b>AUTHOR:</b> {book.AUTHOR}</p>
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
              <li style={{ padding: "10px"}} className="nav-item">
                <Link to="/Home" style={navStyle}>
                  Home 
                </Link>
              </li>
               <li style={{ padding: "10px"}} className="nav-item">  
                  <Link to="/Books" style={navStyle}>
                    Books 
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
              <button  onClick={() => this.getDetails('Search')}  className="btn btn-outline-warning my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
       </nav>
        <div className="row">
          <div className="col-lg-3">
            <div className="list-group">
              <button type="button" onClick={() => this.getDetails('Full Stack Developer')} className="list-group-item list-group-item-action"> Full Stack Developer</button>
              <button type="button" onClick={() => this.getDetails('ReactJS')} className="list-group-item list-group-item-action ">ReactJS</button>
              <button type="button" onClick={() => this.getDetails('NodeJS')}  className="list-group-item list-group-item-action">NodeJS</button>
              <button type="button" onClick={() => this.getDetails('Modern JavaScript')}  className="list-group-item list-group-item-action">Modern JavaScript</button>
              <button type="button" onClick={() => this.getDetails('HTML, CSS, & RWD')}  className="list-group-item list-group-item-action" >HTML, CSS, & RWD</button>
              <button type="button" onClick={() => this.getDetails('Mongo DB')}  className="list-group-item list-group-item-action" >Mongo DB</button>
            </div>
          </div>
          <div className="col-lg-9">
            <div>               
              {booksData} 
            </div>
          </div>
      </div>
    </div>
  );
}
}
export default Books;
