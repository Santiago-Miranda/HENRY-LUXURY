import {
  FILTER_BY_TYPES_CATEGORY,
  GET_ALL_CATEGORY,
  ORDER_COUNTINSTOCK,
  ORDER_NAME,
  ORDER_PRICE,
  ORDER_RATING,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../Constants/ProductConstants";



// PRODUCT LIST
export const productListReducer = (state = { products: [] ,allProduct:[]}, action) => {
  switch (action.type ) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] ,allProduct:[]};
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        products: action.payload.products,
        allProduct: action.payload.products,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

      case ORDER_NAME:
        let orderedCharacters = [...state.products];

        orderedCharacters = orderedCharacters.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return action.payload.products === "ASCENDENTE" ? -1 : 1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return action.payload.products === "ASCENDENTE" ? 1 : -1;
          }
          return 0;
        });
  
        return {
          ...state,
          products: action.payload.products === "Filtro" ? state.allProduct : orderedCharacters,
        };

        case ORDER_RATING:
          const sortScore =action.payload.products === "min"
              ? state.products.sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return 1;
                  }
                  if (b.rating > a.rating) {
                    return -1;
                  }
                  return 0;
                })
              : state.products.sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return -1;
                  }
                  if (b.rating > a.rating) {
                    return 1;
                  }
                  return 0;
                });
          return {
            ...state,
            products: action.payload.products === "default" ? state.products : sortScore,
          };
        case ORDER_PRICE:
          const sortPrice = action.payload.products === "min"
              ? state.products.sort(function (a, b) {
                  if (a.price > b.price) {
                    return 1;
                  }
                  if (b.price > a.price) {
                    return -1;
                  }
                  return 0;
                })
              : state.products.sort(function (a, b) {
                  if (a.price > b.price) {
                    return -1;
                  }
                  if (b.price > a.price) {
                    return 1;
                  }
                  return 0;
                });
          return {
            ...state,
            product: action.payload.products === "default" ? state.products : sortPrice,
          };
        case ORDER_COUNTINSTOCK:
          const sortCountinstock =
          action.payload.products === "min"
              ? state.products.sort(function (a, b) {
                  if (a.countInStock > b.countInStock) {
                    return 1;
                  }
                  if (b.countInStock > a.countInStock) {
                    return -1;
                  }
                  return 0;
                })
              : state.products.sort(function (a, b) {
                  if (a.countInStock > b.countInStock) {
                    return -1;
                  }
                  if (b.countInStock > a.countInStock) {
                    return 1;
                  }
                  return 0;
                });
          return {
            ...state,
            product: action.payload.products === "default" ? state.products : sortCountinstock,
          };
        case GET_ALL_CATEGORY:
          return {
            ...state,
            allCategory:action.payload.products,
          };
        case FILTER_BY_TYPES_CATEGORY:


          const product = state.allProduct
          const productFiltered = action.payload === 'tipos' ? product : product.filter(el => el.categories === (action.payload))
    
    
          return {
            ...state,
            products: productFiltered
    
          }





        default:
      return state;
  }
};

// SINGLE PRODUCT
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT REVIEW CREATE
export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

