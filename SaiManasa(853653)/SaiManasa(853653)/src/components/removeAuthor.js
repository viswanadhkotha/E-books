import React ,{Component} from "react";
import axios from "axios";
import NavBar from './navbar';
import ListGroup from './listgroup';
class RemoveAuthor extends Component{
    state={
        AuthorName: '',
        ContactNo: '',
        EmailID: '',
        Address:'',
        _id:'',
       posts:[]
    };
    delete=(id)=>{
        //event.preventDefault();
        //const Aid={id};
    
    axios({
        url:'/api/authors/delete',
        method:'POST',
        //data:Aid
    })
    .then(() => {
       console.log('Data has been sent to the server');
       this.resetUserInputs();
       alert(" Author Details Deleted successfuly!! ,To add more press ok");
    })
    .catch(() => {
       console.log('Oops something went wrong');
    })
}
    componentDidMount=()=>{
      this.getAuthor();
    }
    getAuthor=()=>{
      axios.get('/api/authors')
      .then((response)=>{
        const data=response.data;
        this.setState({posts:data});
        console.log("data hase been received");
      })
      .catch(()=>{
        alert("error retrievin data");
      });
    }
    displayAuthor=(posts)=>{
      if(!posts.length) return null;
      return posts.map((post,index)=>(
        <div className="row shadow mb-3 mt-5" key={index}>
              <div className="col-md-2">
                
              </div>
              <div className="col-md-10 p-5">
                                <h3>{post.AuthorName}</h3>
                ContactNo:{post.ContactNo} | EmailID: {post.Price} | Address:{post.Address} <br></br>
                <button className="btn btn-lg btn-danger " id={post._id} onClick={this.delete}>Remove</button> 

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
               {this.displayAuthor(this.state.posts)}
            </div>

          </div>
        </div>
      </div>
    </div>
 
     )
   }
 

}
export default RemoveAuthor;