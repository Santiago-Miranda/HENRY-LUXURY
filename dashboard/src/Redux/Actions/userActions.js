import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_ADMIN,
  USER_ADMIN_FAIL,
  USER_ADMIN_SUCCES,
  USER_BAN,
  USER_BAN_FAIL,
  USER_BAN_SUCCES,
  ORDER_STALL,ORDER_STATUS,ORDER_MAIL,ORDER_NAME
} from "../Constants/UserContants";
import axios from "axios";
import { toast } from "react-toastify";

// LOGIN
export const login = (email, password) => async (dispatch) => {
  const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
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

    if (!data.isAdmin === true) {
      toast.error("You are not Admin", ToastObjects);
      dispatch({
        type: USER_LOGIN_FAIL,
      });
    } else {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    }

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_LIST_RESET });
};

// ALL USER
export const listUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};


export function OrderName(payload) {
  return { 
      type: ORDER_NAME,
      payload
  }
};
//* Filter por Score
export function orderStall(payload){
  return{
      type:ORDER_STALL,
      payload
  }
}
//* filter por Price  
export function orderStatus(payload){
  return{
      type:ORDER_STATUS,
      payload
  }
}

export function orderMail(payload){
  return{
          type: ORDER_MAIL,
          payload
  }}

//Baneo
  export const banUser = (payload) => async (dispatch, getState) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();


      

      dispatch({ type: USER_BAN });
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };


  
      const { data } = await axios.put(`/api/users/ban`, {payload}, config,);
  
      dispatch({ type: USER_BAN_SUCCES, payload: data });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_BAN_FAIL,
        payload: message,
      });
    }
  };

  export const adminUser = (payload) => async (dispatch, getState) => {
    try {

      const {
        userLogin: { userInfo },
      } = getState();
  

      dispatch({ type: USER_ADMIN });
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(`/api/users/changeAdmin`, {payload}, config);
  

      dispatch({ type: USER_ADMIN_SUCCES, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_ADMIN_FAIL,
        payload: message,
      });
    }
  };