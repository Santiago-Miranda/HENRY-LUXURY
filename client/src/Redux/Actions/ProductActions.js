import axios from "axios";
import {
  ADD_FAVORITES,
  FILTER_BY_TYPES_CATEGORY,
  GET_ALL_CATEGORY,
  ORDER_COUNTINSTOCK,
  ORDER_NAME,
  ORDER_PRICE,
  ORDER_RATING,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REMOVE_FAVORITES,
} from "../Constants/ProductConstants";
import { logout } from "./userActions";

// PRODUCT LIST
export const listProduct = (category="", order = "", keyword = " ", pageNumber = " ",min = 0,max = 0,stock = 0,) =>
  async (dispatch) => {
    //?category=${category}&keyword=${keyword}&pageNumber=${pageNumber}&min=${min}&max=${max}&stock=${stock}&order=${order}
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/products`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// PRODUCT REVIEW CREATE

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/review`, review, config);
      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

  //** Filter Order by name
export function OrderName(payload) {
  return { 
      type: ORDER_NAME,
      payload
  }
};
//* Filter por Score
export function orderRating(payload){
  return{
      type:ORDER_RATING,
      payload
  }
}
//* filter por Price  
export function orderPrice(payload){
  return{
      type:ORDER_PRICE,
      payload
  }
}
//* filter por CountInStock
export function orderCountinStock(payload){
  return{

      type:ORDER_COUNTINSTOCK,
       payload
  }
}


//* Ruta de Todas las Categorias
export function getAllCategory(){
  return async function(dispatch){
      const resul = await axios.get("http://localhost:3001/api/category")
      dispatch({
          type:GET_ALL_CATEGORY,
      payload:resul.data
      })
  }
} 
//*Filtrado por Categorias
export function filterByTypesCategory(payload){
  console.log(payload)
 return{
         type: FILTER_BY_TYPES_CATEGORY,
         payload
 }}


//* Favoritos Prueba


export function add_Favorites (data) {
  return { type: ADD_FAVORITES, payload: data };
};


export function remove_Favorites(id){
  return { type: REMOVE_FAVORITES, payload: id };
};

