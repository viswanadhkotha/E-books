import React, { Component } from "react";
import axios from 'axios';
import NavBar from './navbar';
import ListGroup from './listgroup';
 class AddAuthor extends Component{
     state={
        AuthorName: '',
        ContactNo: '',
        EmailID: '',
        Address:'',
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
            AuthorName: this.state.AuthorName,
            ContactNo: this.state.ContactNo,
            EmailID: this.state.EmailID,
            Address:this.state.Address
         };
         axios({
             url:'/api/authors/save',
             method:'POST',
             data:payload
         })
         .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            alert("New Author Details added successfuly!! ,To add more press ok");
         })
         .catch(() => {
            console.log('Oops something went wrong');
         })
     }
     resetUserInputs=()=>{
         this.setState({
            AuthorName: '',
            ContactNo: '',
            EmailID: '',
            Address:'',
         });
     };
render(){
    console.log('state',this.state);
    return(
        <div>
          <NavBar></NavBar>
        <div className="row">
          <div className="col-sm">
             <ListGroup></ListGroup>
          </div>
        <div className="col-sm p-5">
              <h3 class="text-info">Add A New Author</h3>
              <div className="container border-secondary p-4">
              <form  noValidate onSubmit={this.submit}>
              <div className="form-group">
                <label className="float-sm-left" htmlFor="name">Author Name</label>
                <input
                  type="text"
                  className="form-control "
                  name="AuthorName"
                  placeholder="Enter Author Name"
                  value={this.state.AuthorName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="float-sm-left" htmlFor="name">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  name="ContactNo"
                  placeholder="Enter Contact Number"
                  value={this.state.ContactNo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="float-sm-left" htmlFor="text">Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  name="EmailID"
                  placeholder="Enter email Id"
                  value={this.state.EmailID}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="float-sm-left" htmlFor="text">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  placeholder="Address"
                  value={this.state.Address}
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
export default AddAuthor;