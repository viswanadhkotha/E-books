import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class logout extends Component {
    state = {  }
    l()
    {
        Axios.get('/logout').then(()=>{
            localStorage.removeItem("userToken");
            console.log(localStorage.userToken);
        })

    }
    render() { 
        return ( <div className="container-fluid text-center">
            <p>user logged out successfully {this.l && localStorage.removeItem("userToken")} click here to <Link to="/login"> login</Link></p>
        </div> );
    }
}
 
export default logout;