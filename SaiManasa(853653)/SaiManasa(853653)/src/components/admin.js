import React, { Component } from "react";
import NavBar from './navbar';
import ListGroup from './listgroup';
class Admin extends Component{
    render(){
        return(
            <div>
                    <div>
                        <NavBar></NavBar>
                    </div>
                <div> 
                    <div className="row p-4">
                        <div className="col-3 border border-secondary">
                            <ListGroup></ListGroup>
                        </div>
                        <div className="col-9">
                            <div className="jumbotron jumbotron-fluid">
                                <div className="container">
                                    <h1 className="display-5">Welcome to Admin Dasboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
export default Admin;