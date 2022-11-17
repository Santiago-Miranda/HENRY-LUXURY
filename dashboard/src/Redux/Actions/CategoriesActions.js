import { GET_ALL_CATEGORIES ,CATEGORIES_DELETE_REQUEST,CATEGORIES_DELETE_SUCCESS,CATEGORIES_DELETE_FAIL } from "../Constants/CategoriesConstants";
import axios from "axios";

export const getCategories = () => {
    return async (dispatch) => {
        const res = await axios.get("/api/categories/");
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
        })
    }
}

export const postCategories = (name) => {
    return async (dispatch, getState) => {
        const {
            userLogin: { userInfo },
          } = getState();
    
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
        const post = await axios.post('/api/categories/', {name},config);
        return post;
    }
}




// DELETE PRODUCT

export const deleteCategories = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORIES_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log("action",id)
    await axios.delete(`/api/categories/`,{id}, config);

    dispatch({ type: CATEGORIES_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
     
    }
    dispatch({
      type:CATEGORIES_DELETE_FAIL,
      payload: message,
    });
  }
};



/*export function deleteCategories(id){
  return async function (dispatch){

    try {
      console.log("Front",id)
       await axios.delete("/api/categories/",{id})
        dispatch ({
            type:CATEGORIES_DELETE_REQUEST,
            payload:id
        })
    
    } catch (error) {
        console.log(error)
    }
   
}}
*/