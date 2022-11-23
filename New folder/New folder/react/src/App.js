import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import home from "./components/home";
import menulist from './menu/menulist';
import item from './menu/item';
import ButtonAddRemoveItem from "./ButtonAddRemoveItem";
import ButtonCartCount from "./ButtonCartCount";
import cart from './components/cart';
import EmptyCart from "./components/Emptycart";
import payment from "./components/payment";
import Notify from "./components/Notify";
import Forgetpassword from "./components/Forgetpassword";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-transparent shadow">

          <img src="data:image/jpeg;base64,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" alt="" width="40" height="34" class="ml-1 mt-1 rounded-circle" />
            <Link to={"/"} className="navbar-brand">
              Nursery Plants
            </Link>
             
            
            <div className="navbar-nav mr-auto">
              {!currentUser && (
            
                <div className="head" >
                <h3 class="heading"><center>Welcome to the Plants</center></h3>
                <h6 class="blockquote-footer"> Best Items</h6>
                </div>
                
              )}
            </div>

            <div className="navbar-nav mr-auto">
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Products
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/"]} component={home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
            </Switch>
          </div>
          <Route exact path="/home" component={home} />
          <Route exact path="/menulist" component={menulist} />
          <Route exact path="/item" component={item} />
          <Route exact path="/buttonaddremoveitem" component={ButtonAddRemoveItem} />
          <Route exact path="/buttoncartcount" component={ButtonCartCount} />
          <Route exact path="/cart" component={cart} />
          <Route exact path='/emptycart' component={EmptyCart} />
          <Route exact path="/payment" component={payment} />
          <Route exact path="/paymentsucessful" component={Notify} />
          <Route exact path="/forgetpassword" component={Forgetpassword} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);