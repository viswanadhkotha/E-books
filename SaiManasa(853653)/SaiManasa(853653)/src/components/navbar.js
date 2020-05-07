import React, { Component } from "react";
class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <form className="form-inline">
                        <a className="nav-item nav-link active text-white" href="#">Home <span class="sr-only"></span></a>
                        <a className="nav-item nav-link text-white" href="#">Features</a>
                        <a className="nav-item nav-link text-white" href="#">Pricing</a>
                    </form>
                    <form className="form-inline">
                        <a className="nav-item nav-link text-white" href="/admin">Admin</a>
                        <a className="nav-item nav-link text-white" href="#">Register</a>
                        <a className="nav-item nav-link text-white" href="#">Login</a>              
                    </form>
                </nav>
            </div>
        )
    }
}
export default NavBar;