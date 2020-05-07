import React ,{Component} from "react";
import axios from "axios";
import NavBar from './navbar';
import ListGroup from './listgroup';
class Ratings extends Component{
    state={
       BookTitle: '',
       Review: '',
       Rating: '',
       posts:[]
    };
    componentDidMount=()=>{
      this.getRating();
    }
    getRating=()=>{
      axios.get('/api/ratings')
      .then((response)=>{
        const data=response.data;
        this.setState({posts:data});
        console.log("data hase been received");
      })
      .catch(()=>{
        alert("error retrievin data");
      });
    }
    displayRatings=(posts)=>{
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
                Review:{post.Review} | Rating: {post.Rating} <br></br> 
                <button className="btn btn-lg btn-danger " onClick={2}>Remove</button>
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
               {this.displayRatings(this.state.posts)}
            </div>

          </div>
        </div>
      </div>
    </div>
 
     )
   }
 
}
export default Ratings;