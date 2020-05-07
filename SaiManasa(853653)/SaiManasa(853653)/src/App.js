import React from 'react';
import logo from './logo.svg';
import AddBook from './components/addBook';
import './App.css';
import {Route} from "react-router-dom";
import Admin from './components/admin';
import AddAuthor from './components/addAuthor';
import AddCategory from './components/addCategory';
import RemoveBook from './components/removeBook';
import RemoveAuthor from './components/removeAuthor';
import RemoveCategory  from './components/removeCategory';
import UserManagement from './components/usermang';
import Ratings from './components/ratings';

function App() {
  return (
    <div className="App">
      <Route path='/admin' component={Admin}></Route>
      {/*<Route path="/" exact component={ListGroup} />
       <Route path="/updateBook" component={UpdateBook}/>*/}
      <Route path="/addBook" component={AddBook}/>
      <Route path="/addAuthor" component={AddAuthor}/>
      <Route path="/addCategory" component={AddCategory}/>
      <Route path="/removeBook" component={RemoveBook}/>
      <Route path="/removeAuthor" component={RemoveAuthor}/>
      <Route path="/removeCategory" component={RemoveCategory}/>
      <Route path="/users" component={UserManagement}/>
      <Route path="/ratings" component={Ratings}/>


    </div>
  );
}

export default App;
