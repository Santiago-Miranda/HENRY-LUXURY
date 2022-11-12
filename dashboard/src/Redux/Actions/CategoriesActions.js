import { GET_ALL_CATEGORIES, POST_CATEGORIES } from "../Constants/CategoriesConstants";
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

export const postCategories = (payload) => {
    return async () => {
        const post = await axios.post("/api/categories/", payload);
        return post;
    }
}