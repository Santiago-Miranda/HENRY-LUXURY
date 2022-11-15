import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode"
import { Google } from "../Redux/Actions/userActions";
import useLocalStorage from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom"


const GoogleLogin = () => {
    const dispatch = useDispatch();
    
  
  
  const User = useSelector((state) => state.userGoogle)
  const { error, loading, userGoogle} = User;


  const [googleUser, setGoogleUser] = window.localStorage.getItem("userGoogle");
  //const [googleUser, setGoogleUser] = useLocalStorage("userGoogle","")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
      function handleCallbackResponse(response) {
          console.log("ENCODED JWT ID TOKEN" + response.credential);
          var userObject = jwt_decode(response.credential);
          setGoogleUser(userObject)
          const email= userObject.email
          const image = userObject.picture
          const name = userObject.name
          console.log(userObject)
          dispatch(Google(email, name));
          history.push("/");
        } 
        const history = useHistory()
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

                    <div id="signInDiv">
                    </div>

      </>
    );
  }

  export default GoogleLogin