import React, { Component } from "react";
import Axios from "axios";

class books extends Component {
  state = {
    p:[],
    products: [],
  };
  componentDidMount() {
    Axios.post("/api/products/getProducts").then((response) => {
      if (response.data.success) {
        this.setState({ p: response.data.products });
        this.setState({ products: response.data.products });
        console.log(response.data.products);
        
      } else {
        alert("unable to get data");
      }
    });
  }
  getDetails=(cat)=>{

    let pr=this.state.p.filter(m=>m.CATEGORY===cat);
    this.setState({products:pr});


    
  }

  render() {
    const renderproducts = this.state.products.map((p, index) => {
      console.log(p.image);

      return (
        /*<div className="" key={index}>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top"  src="https://images.springer.com/sgw/books/medium/9781484231975.jpg" alt="product img"/>
              <div className="card-body">
                <h5 className="card-title">{p.NAME}</h5>
                <p className="card-text">Price:{p.PRICE}</p>
              </div>
            </div>
          </div>
        </div>*/
        <div key={index}>
          <a href={`/book/${p._id}`} style={{ textDecoration: "none" }}>
            <div className="row shadow mb-3 mt-5" key={index}>
              <div className="col-md-2">
                <img
                  className="img-thumbnail"
                  height="200"
                  src={p.image}
                  alt="product img"
                />
              </div>
              <div className="col-md-10 p-5">
                <h3>{p.NAME}</h3>
                Author:{p.AUTHOR} | Price: {p.PRICE} | No of Pages:{p.PAGES} |
                PUBLISHED DATE : {p.PUBLISHEDDATE}
              </div>
            </div>
          </a>
        </div>
      );
    });
    return (
      <div>
        <div className="row text-center mt-2">
          <div className="col-md-3">
          <div className="list-group sticky-top">
          <button type="button" onClick={() =>{let p=this.state.p; this.setState({products:p})} }className="list-group-item list-group-item-action"> All</button>
          <button type="button" onClick={() => this.getDetails('Full Stack Developer')} className="list-group-item list-group-item-action"> Full Stack Developer</button>
          <button type="button" onClick={() => this.getDetails('ReactJS')} className="list-group-item list-group-item-action ">ReactJS</button>
          <button type="button" onClick={() => this.getDetails('NodeJS')}  className="list-group-item list-group-item-action">NodeJS</button>
          <button type="button" onClick={() => this.getDetails('Modern JavaScript')}  className="list-group-item list-group-item-action">Modern JavaScript</button>
          <button type="button" onClick={() => this.getDetails('HTML, CSS, & RWD')}  className="list-group-item list-group-item-action" >HTML, CSS, & RWD</button>
          <button type="button" onClick={() => this.getDetails('Mongo DB')}  className="list-group-item list-group-item-action" >Mongo DB</button>
        </div>
          </div>
          <div className="col-md-9">
            {this.state.products.length === 0 ? (
              <div>
                <h2>No products yet</h2>
              </div>
            ) : (
              <div>{renderproducts}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default books;
