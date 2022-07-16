import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class LogOut extends Component {
    constructor(props){
    super(props)
localStorage.removeItem("id")
localStorage.removeItem("token")
localStorage.removeItem("userid")
}
      render(){
         
    return (
        
      <div><Navigate to="/" /></div>
    )

    }
}