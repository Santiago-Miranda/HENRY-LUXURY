import { GET_ALL_CATEGORIES ,CATEGORIES_DELETE_REQUEST,CATEGORIES_DELETE_SUCCESS,CATEGORIES_DELETE_FAIL} from "../Constants/CategoriesConstants"


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


// DELETE PRODUCT
export const categoriesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORIES_DELETE_REQUEST:
        return { loading: true };
      case CATEGORIES_DELETE_SUCCESS:
        return { loading: false, success: true };
      case CATEGORIES_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
