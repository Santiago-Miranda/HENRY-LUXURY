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
  console.log(userGoogle)

  //const [googleUser, setGoogleUser] = window.localStorage.getItem("userGoogle");
  const [googleUser, setGoogleUser] = useLocalStorage("userGoogle","")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
      function handleCallbackResponse(response) {
          console.log("ENCODED JWT ID TOKEN " + response.credential);
          var userObject = jwt_decode(response.credential);
          console.log(userObject)
          setGoogleUser(userObject)
          const email= userObject.email
          const image = userObject.picture
          const name = userObject.name
          dispatch(Google(email, name));
          document.getElementById("signInDiv").hidden = true;
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

            google.accounts.id.prompt();
            },[])
            
           
          const [user, setUser] = useState({});
            
           function handleSignOut(event) {
              setUser({})
              document.getElementById("signInDiv").hidden = false;
           }
           

        
  return (
      <>

          <div id="signInDiv">
            {Object.keys(user).length != 0 &&
              <button onClick={(e) => handleSignOut(e)}>Logout</button>
            }
          </div>

      </>
    );
  }

  export default GoogleLogin