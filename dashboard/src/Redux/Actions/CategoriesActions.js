import { GET_ALL_CATEGORIES } from "../Constants/CategoriesConstants";
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