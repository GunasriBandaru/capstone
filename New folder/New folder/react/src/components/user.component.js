import React, { Component, useRef } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Menulist from "../menu/menulist";

const User =()=>{
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     content: ""
  //   };
  // }

  // componentDidMount() {
  //   UserService.getGreetings().then(
  //     response => {
  //       this.setState({
  //         content: response.data.message
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //       });

  //       if (error.response && error.response.status === 401) {
  //         EventBus.dispatch("logout");
  //       }
  //     }
  //   );
  // }
  
    const menuRef=useRef();
    return (

        <div>
        {/* <h3>{this.state.content}</h3> */}
        <Menulist ref={menuRef}/>

        {/* <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a> */}
          </div>
     
    );
  }

  export default User;