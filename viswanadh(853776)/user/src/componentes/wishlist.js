import React, { Component } from 'react';
import Axios from "axios";
import jwt from "jsonwebtoken";

class wishlist extends Component {
    state = {
        items: []
      };
    
      async componentDidMount() {
        if (!localStorage.userToken) {
          window.alert("please login");
        } else {
          let id = jwt.decode(localStorage.userToken);
          await Axios.get(`api/wishlist?id=${id._id}`).then(async (res) => {
            if (!res.data.success) {
              window.alert("no items in cart");
            } else {
              this.setState({ items: res.data.wishlist });
              console.log(this.state.items);
            }
          });
        }
        
      }
      
      
      delete = (bid) => {
        let id = jwt.decode(localStorage.userToken);
        console.log("delete called");
        Axios.delete(`/api/removefromwishlist?id=${id._id}&bookid=${bid}`).then(
          (res) => {
            if (res.data.success) {
              /*var items=this.state.items;
              var it=items.filter((m)=>{m.id!=bid})*/
    
              console.log(res.data);
              console.log(this.state.items);
              this.setState({ items: res.data.wishlist });
    
              console.log("deleted");
              
            } else {
              window.alert("unable to delete");
            }
          }
        );
      };
      render() {
        const renderproducts = this.state.items.map((m) => {
          console.log(m);
    
          return (
            <tr key={m.id}>
              <td className="align-middle">
                <img src={m.image} alt="book" width="40" height="50" />
              </td>
              <td className="align-middle">{m.name}</td>
              <td className="align-middle">{m.price}</td>
              
              <td className="align-middle">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => this.delete(m.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        });
        return (
          <div>
            {this.state.items.length === 0 ? (
              <div className="text-center">
                <h2>No products yet</h2>
              </div>
            ) : (
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{renderproducts}</tbody>
                </table>
                
              </div>
            )}
          </div>
        );
      }
}
 
export default wishlist;