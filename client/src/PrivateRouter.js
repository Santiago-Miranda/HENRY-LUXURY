import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";


function PrivateRouter({ component: Component, ...rest }) {
  const User = useSelector((state)=> state.userGoogle)
  const { userGoogle } = User
  console.log(userGoogle)


  return (
    !userGoogle?(
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    /> ) : (
      <Route
      {...rest}
      component={(props) => {
        const google = window.localStorage.getItem("userGoogle");
        if (google) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}/>
    )
  )
}

export default PrivateRouter;


