import React ,{Component} from "react";
import axios from "axios";
import NavBar from './navbar';
import ListGroup from './listgroup';
class UserManagement extends Component{
    state={
        UserName: '',
        ContactNo: '',
        EmailID: '',
        NoOfOrders:'',
        posts:[]
    };
    
    componentDidMount=()=>{
      this.getUser();
    }
    getUser=()=>{
      axios.get('/api/users')
      .then((response)=>{
        const data=response.data;
        this.setState({posts:data});
        console.log("data hase been received");
      })
      .catch(()=>{
        alert("error retrievin data");
      });
    }
    displayUsers=(posts)=>{
      if(!posts.length) return null;
      return posts.map((post,index)=>(
        <div className="row shadow mb-3 mt-5" key={index}>
              <div className="col-md-2">
                
              </div>
              <div className="col-md-10 p-5">
                <h3>{post.UserName}</h3>
                ContactNo:{post.ContactNo} | EmailID: {post.Price} | No.of orders:{post.NoOfOrders} <br></br>
                
              </div>
            </div>
      ));
      };
      
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
            <div>
               {this.displayUsers(this.state.posts)}
            </div>

          </div>
        </div>
      </div>
    </div>
 
     )
   }
 

}
export default UserManagement;