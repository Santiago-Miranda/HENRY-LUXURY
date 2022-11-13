import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import { Googlelogin } from "./../Redux/Actions/userActions";
import jwt_decode from "jwt-decode"
import GoogleLogin from "./GoogleLogin";





const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  


  
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  
  
  
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);

    }
  }, [userInfo, history, redirect,]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

 /* function handleGoogleLoginSuccess(tokenResponse) {

    const accessToken = tokenResponse.access_token;

    dispatch(signinGoogle(accessToken,history))
}

const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess}); */

/* function handleCallbackResponse(response) {
  console.log("ENCODED JWT ID TOKEN" + response.credential);
  var userObject = jwt_decode(response.credential);
  setGoogleUser(userObject)
  const email= userObject.email
    const image = userObject.picture
    const name = userObject.name
  console.log(userObject)
}  */

 
  
    



  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
           
                
                  <GoogleLogin/>
                
       
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
