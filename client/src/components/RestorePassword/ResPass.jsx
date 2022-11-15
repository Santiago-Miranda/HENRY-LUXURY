import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userResetPassword } from "../../Redux/Actions/userActions";
import Header from "../Header";

const ResPass = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userResetPassword(email));
  };

  return (
    <div>
      <Header />

      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
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
          {/* /resetpasslogin */}

          <button type="submit">recover password</button>

          <br/>
          <br/>

          <Link to="/resetpasslogin"><h3>Next</h3></Link>
         
        </form>
      </div>
    </div>
  );
};

export default ResPass;
