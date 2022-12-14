import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST, 
  USER_DETAILS_RESET, 
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL, 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGOUT, 
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST, 
  USER_REGISTER_SUCCESS, 
  USER_UPDATE_PROFILE_FAIL, 
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS, 
  USER_RESET_PASSWORD, 
  USER_CONFIRM_PASSWORD, 
  USER_CONFIRM_PASSWORD_FAIL,
  USER_RESET_PASSWORD_FAIL, 
  USER_CONFIRM_MAIL, 
  USER_CONFIRM_MAIL_FAIL,  
  USER_LOGIN_GOOGLE_FAIL,
  USER_LOGIN_GOOGLE_SUCCESS, 
  USER_LOGIN_GOOGLE_REQUEST, 
  USER_LOGOUT_GOOGLE,
  } from "../Constants/UserContants";
import axios from "axios";
import { ORDER_LIST_MY_RESET } from "../Constants/OrderConstants";


// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
};

//LOGOUT GOOGLE
export const logoutGoogle = () => (dispatch) => {
  localStorage.removeItem("userGoogle");
  dispatch({ type: USER_LOGOUT_GOOGLE });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
};

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users`,
      { name, email, password },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

// UPDATE PROFILE
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
      userGoogle: {userGoogle}
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token || userGoogle.google}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("userGoogle", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};
// Google
export const Google = (email, name) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_GOOGLE_REQUEST });

   

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/loginGoogle`,{ email, name },
      config
    );
    dispatch({ type: USER_LOGIN_GOOGLE_SUCCESS, payload: data });

    localStorage.setItem("userGoogle", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_GOOGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


//* Recuperar Contrase??a

export const userResetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESET_PASSWORD });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/users/PassCode`,
      {email},
      config
    );
    console.log(data)
    dispatch({ type: USER_RESET_PASSWORD, payload: data });

    

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//*Confirmar Contrase??a "/resetPass"

export const userConfirmPassword = (email, token, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_PASSWORD });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/users/resetPass`,
      {email, token, password},
      config
    );
    console.log(data)
    dispatch({ type: USER_CONFIRM_PASSWORD, payload: data });

    

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//*Confirmar Mail por codigo "/api/users/authMail"



export const userConfirmMail = (email, confirmationCode) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_MAIL });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/users/authMail`,
      {email, confirmationCode},
      config
    );
    console.log(data)
    dispatch({ type: USER_CONFIRM_PASSWORD, payload: data });

    

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_MAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};










