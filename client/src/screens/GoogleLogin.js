import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import { Googlelogin } from "./../Redux/Actions/userActions";
import jwt_decode from "jwt-decode"

import useLocalStorage from "../hooks/useLocalStorage";

const GoogleLogin = ({location,history}) => {
  const dispatch = useDispatch();
  const userGoogle = useSelector ((state)=>state.userGoogleLogin)
  console.log(userGoogle)

      

  const [googleUser, setGoogleUser] = useLocalStorage("googleUser","")

  const GooglesubmitHandler = (e) => {
    e.preventDefault();
    dispatch(Googlelogin());
  };

    function handleCallbackResponse(response) {
        console.log("ENCODED JWT ID TOKEN" + response.credential);
        var userObject = jwt_decode(response.credential);
        setGoogleUser(userObject)
        const email= userObject.email
        const image = userObject.picture
        const name = userObject.name
        console.log(userObject)
      } 
      
      useEffect(() => { 
          google.accounts.id.initialize({
            /* global google */
            client_id:"403569777348-oqha6oorkqenonf170o7gqu03n07rspi.apps.googleusercontent.com",
            callback: handleCallbackResponse,
          });
          google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
          {  theme: "outline",size:"large"}
          );
          },[])

        
      
return (
    <>
      
           
                
                  <div onClick={GooglesubmitHandler} id="signInDiv"></div>
                
    
    </>
  );
}


export default GoogleLogin;
