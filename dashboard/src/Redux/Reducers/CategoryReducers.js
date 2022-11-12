import { GET_ALL_CATEGORIES } from "../Constants/CategoriesConstants"


export const categoriesListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
     default: return state
    }
}  