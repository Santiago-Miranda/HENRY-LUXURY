import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userConfirmPassword } from '../../Redux/Actions/userActions';
import Header from '../Header'


const ResetPassLogin = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token , setToken] = useState("");

    const dispatch = useDispatch();
    
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userConfirmPassword(email,token,password));
    history.push("/login")
    alert("Reset Password Successfully")
  };

  return (
    <div>
       <Header />

<div className="container d-flex flex-column justify-content-center align-items-center login-center">
  <form className="Login col-md-8 col-lg-4 col-11"
   onSubmit={submitHandler}
  
  >
    <input type="email" placeholder="Email" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    
    />
    <input type="token" placeholder="Token" 
    
    value={token.toString()}
    onChange={(e) => setToken(e.target.value)}
    />
    <input type="password" placeholder="password" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <input type="password" placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Confirm Password</button>
  </form>
</div>
    </div>
  )
}

export default ResetPassLogin
