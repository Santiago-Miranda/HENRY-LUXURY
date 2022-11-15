import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import GoogleLogin from "./GoogleLogin";


//mport Google from './Google.jsx';<GoogleOAuthProvider>
       
         // <Google onClick={handleGoogleSignin} />
         // </GoogleOAuthProvider>
    
//import google from "../components/images/google"




const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] :"/";
console.log(redirect)
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

  

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  }; 
 
  

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
         {/* */}
       
         {/*<img src={google} className="App-logo" alt="logo" />*/}
       
           <GoogleLogin/>
       
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
        <br/>
        <br/>
        <h3><Link to ="/resspass">Recover Password</Link></h3>
        <br/>
        <br/>

        <h3><Link to ="/verifiedmail">Verified Mail</Link></h3>
      </div>
    </>
  );
};

export default Login;
