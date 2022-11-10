import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  FILTER_BY_TYPES_CATEGORY,
  GET_ALL_CATEGORY,
  ORDER_COUNTINSTOCK,
  ORDER_NAME,
  ORDER_PRICE,
  ORDER_RATING,
} from "../Constants/ProductConstants";

// ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    case ORDER_NAME:


      let orderedCharacters = [...state.products];

      let name = action.payload === "DESCENDENTE" ?
        orderedCharacters.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (b.name > a.name) {
            return -1
          }
          return 0
        }) : action.payload === "ASCENDENTE" ?
          orderedCharacters.sort((a, b) => {
            if (a.name > b.name) {
              return -1
            }
            if (b.name > a.name) {
              return 1
            }
            return 0
          }) : orderedCharacters

      return {
        ...state,
        products: name
      }

    case ORDER_RATING:
      const sortScore = action.payload === "min"
        ? state.products.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        })
        : action.payload === "max" ? state.products.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        }):action.payload
      return {
        ...state,
        products: action.payload === "default" ? state.products : sortScore,
      };
    case ORDER_PRICE:
      const sortPrice = action.payload === "min"
        ? state.products.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (b.price > a.price) {
            return -1;
          }
          return 0;
        })
        : action.payload === "max" ? state.products.sort(function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (b.price > a.price) {
            return 1;
          }
          return 0;
        }): state.products
      return {
        ...state,
        product: action.payload === "default" ? state.products : sortPrice,
      };
    case ORDER_COUNTINSTOCK:
      const sortCountinstock =
        action.payload === "min"
          ? state.products.sort(function (a, b) {
            if (a.countInStock > b.countInStock) {
              return 1;
            }
            if (b.countInStock > a.countInStock) {
              return -1;
            }
            return 0;
          })
          : action.payload === "max" ? state.products.sort(function (a, b) {
            if (a.countInStock > b.countInStock) {
              return -1;
            }
            if (b.countInStock > a.countInStock) {
              return 1;
            }
            return 0;
          }): state.products
      return {
        ...state,
        product: action.payload === "default" ? state.products : sortCountinstock,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        allCategory: action.payload.products,
      };



    case FILTER_BY_TYPES_CATEGORY:

      let orderedCategory = [...state.products];

      let category = action.payload === "DESCENDENTE" ?
      orderedCategory.sort((a, b) => {
          if (a.categories > b.categories) {
            return 1
          }
          if (b.categories > a.categories) {
            return -1
          }
          return 0
        }) : action.payload === "ASCENDENTE" ?
        orderedCategory.sort((a, b) => {
            if (a.categories > b.categories) {
              return -1
            }
            if (b.categories > a.categories) {
              return 1
            }
            return 0
          }) : orderedCharacters

      return {
        ...state,
        products: category
      }

    default:
      return state;
  }
};

// DELETE PRODUCT
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DELETE PRODUCT
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// EDIT PRODUCT
export const productEditReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_EDIT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE PRODUCT
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
