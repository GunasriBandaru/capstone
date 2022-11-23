import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Menulist from "../menu/menulist";
import Item from "../menu/item";


class Profile extends Component {

 
  render() {

    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div class="card bg-light text-dark">
        <h3>{currentUser.username}</h3>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        {/* <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}


export default connect(mapStateToProps)(Profile);