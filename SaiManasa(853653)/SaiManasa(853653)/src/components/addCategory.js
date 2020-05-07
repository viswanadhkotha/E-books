import React, { Component } from "react";
import axios from 'axios';
import NavBar from './navbar';
import ListGroup from './listgroup';
 class AddCategory extends Component{
     state={
        Category: '',
        errors: {}
     };
     handleChange=({target})=>{
        const {name,value}=target;
        this.setState({
            [name]:value
        });
     }
     submit=(event)=>{
         event.preventDefault();
         const payload={
            Category: this.state.Category,
         };
         axios({
             url:'/api/categories/save',
             method:'POST',
             data:payload
         })
         .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            alert("New Book Details added successfuly!! ,To add more press ok");
         })
         .catch(() => {
            console.log('Oops something went wrong');
         })
     }
     resetUserInputs=()=>{
         this.setState({
            Category: '',
        });
     };
render(){
    console.log('sate',this.state);
    return(
        <div>
          <NavBar></NavBar>
        <div className="row">
          <div className="col-sm">
             <ListGroup></ListGroup>
          </div>
        <div className="col-sm p-5">
            <h3 class="text-info">Add A New Category</h3>
            <div className="container border-secondary p-4">
              <form  noValidate onSubmit={this.submit}>
              <div className="form-group">
                <label className="float-sm-left" htmlFor="text">Category</label>
                <input
                  type="email"
                  className="form-control"
                  name="Category"
                  placeholder="Enter Category"
                  value={this.state.Category}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-secondary btn-block"
              >
                Add
              </button>
            </form>
          </div>
         
        </div>
          <div class="col-sm"></div>
        </div>
      </div>
    )
  }
}
export default AddCategory;