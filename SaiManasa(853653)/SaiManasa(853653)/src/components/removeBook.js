import React ,{Component} from "react";
import axios from "axios";
import NavBar from './navbar';
import ListGroup from './listgroup';
class RemoveBook extends Component{
    state={
       BookTitle: '',
       AuthorName: '',
       Category: '',
       Price: '',
       //ReleaseDate:'',
       posts:[]
    };
    delete=(id)=>{
      //event.preventDefault();
      //const Aid={id};
  
  axios({
      url:'/api/books/delete',
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
      this.getBook();
    }
    getBook=()=>{
      axios.get('/api/books')
      .then((response)=>{
        const data=response.data;
        this.setState({posts:data});
        console.log("data hase been received");
      })
      .catch(()=>{
        alert("error retrievin data");
      });
    }
    displayBooks=(posts)=>{
      if(!posts.length) return null;
      return posts.map((post,index)=>(
          <div className="row shadow mb-3 mt-5" key={index}>
              <div className="col-md-2">
                <img
                  className="thumbnail"
                  height="200"
                  src="https://images.springer.com/sgw/books/medium/9781484231975.jpg"
                  alt="product img"
                />
              </div>
              <div className="col-md-10 p-5">
              <h3>{post.BookTitle}</h3>
                Author:{post.AuthorName} | Price: {post.Price} | Category:{post.Category}<br></br> 
                <button className="btn btn-lg btn-danger " onClick={this.delete}>Remove</button>
              </div>
            </div>
        
      ));
      };
      /*getBook=()=>{
       axios.post('/api/books')
       .then((response) => {
           const data =response.data;
           console.log(data);
           this.setState({ posts:data });
           //console.log(response.data.posts);
           console.log(this.state.posts);
         
       });
     }*/
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
               {this.displayBooks(this.state.posts)}
            </div>

          </div>
        </div>
      </div>
    </div>
 
     )
   }
 /*render(){
   return(
     <div><h3>remove page</h3>
     {this.displayBooks(this.state.posts)}
     </div>
   )
 }*/

}
export default RemoveBook;