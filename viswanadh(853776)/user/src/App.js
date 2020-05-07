import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./componentes/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import home from "./componentes/home";
import login from "./componentes/login";
import registration from "./componentes/registration";
import pagenotfound from "./componentes/pagenotfound";
import books from "./componentes/books";
import aboutus from "./componentes/aboutus";
import contactus from "./componentes/contactus";
import Footer from "./componentes/footer";
import bookdetail from "./componentes/bookDetail";
import logout from "./componentes/logout";
import cart from "./componentes/cart";
import success from "./componentes/success";
import profile from "./componentes/profile";
import wishlist from "./componentes/wishlist";
import myorders from "./componentes/myordes";
import payment from "./componentes/payment";

function App() {
  return (
    <div className="container-fluid">
      {localStorage.setItem("isauth", false)}
      <NavBar />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/books" exact component={books} />
        <Route path="/book/:bookId" component={bookdetail} />
        <Route path="/aboutus" exact component={aboutus} />
        <Route path="/contactus" exact component={contactus} />
        <Route path="/payment" exact component={payment} />
        <Route path="/login" exact component={login} />
        <Route path="/success" exact component={success} />
        <Route path="/profile" exact component={profile} />
        <Route path="/myorders" exact component={myorders} />
        <Route path="/wishlist" exact component={wishlist} />
        <Route path="/cart" exact component={cart} />
        <Route path="/logout" exact component={logout} />
        <Route path="/register" exact component={registration} />
        <Redirect to="/login"></Redirect>
        <Route component={pagenotfound} />
      </Switch>
      
    </div>
  );
}

export default App;
