import React, { Component } from "react";
class ListGroup extends Component{
    render(){
        return(
            <div className="col-sm border-secondary p-4">
         <ul className="list-group ">
            <li className="list-group-item">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Category Management  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addCategory">Add</a>
                        <a className="dropdown-item" href="/removeCategory">Remove</a>
                        </div>
                </div>
            </li>
            <li className="list-group-item">
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Product Management  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addBook">Add</a>
                        <a className="dropdown-item" href="/removeBook">Remove</a>
                        </div>
                </div>
            </li>
            <li className="list-group-item">
                <a className="p-2 mb-2 bg-secondary text-white float-sm-left" href="/ratings">Review and Rating </a>
            </li>
            <li className="list-group-item">
                <a className="p-2 mb-2 bg-secondary text-white float-sm-left" href="/users">User Management </a>
            </li>
            <li className="list-group-item">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle float-sm-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Author details update  
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/addAuthor">Add</a>
                        <a className="dropdown-item" href="/removeAuthor">Remove</a>
                        </div>
                </div>         
               </li>
            
        </ul>
    </div>
     )
    }
}
export default ListGroup;