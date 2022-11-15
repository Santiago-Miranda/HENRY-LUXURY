import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userConfirmMail } from '../../Redux/Actions/userActions';
import Header from '../Header'


const VerifiedMail = () => {


    const [email, setEmail] = useState("");
    const [confirmationCode , setconfirmationCode] = useState("");
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userConfirmMail(email,confirmationCode));
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
    <input type="confirmationCode" placeholder="confirmation Code" 
    
    value={confirmationCode.toString()}
    onChange={(e) => setconfirmationCode(e.target.value)}
    />
  
  
  <button type="submit">Confirm Mail</button>
  </form>
</div>
</div> 
  )
}

export default VerifiedMail
