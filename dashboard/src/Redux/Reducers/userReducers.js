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
  ORDER_STALL, ORDER_STATUS, ORDER_MAIL, ORDER_NAME
} from "../Constants/UserContants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// ALL USER
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };

    case ORDER_NAME:


      let orderedCharacters = [...state.users];

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
        users: name
      }
    case ORDER_STATUS:
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
        }) : state.products
      return {
        ...state,
        product: action.payload === "default" ? state.products : sortPrice,
      };
    case ORDER_STALL:
      let order = [...state.users];

      let stall = action.payload === "DESCENDENTE" ?
        order.sort((a, b) => {
          if (a.isAdmin > b.isAdmin) {
            return 1
          }
          if (b.isAdmin > a.isAdmin) {
            return -1
          }
          return 0
        }) : action.payload === "ASCENDENTE" ?
          order.sort((a, b) => {
            if (a.isAdmin > b.isAdmin) {
              return -1
            }
            if (b.isAdmin > a.isAdmin) {
              return 1
            }
            return 0
          }) : order

      return {
        ...state,
        users: stall
      }



    case ORDER_MAIL:

      let orderedCategory = [...state.users];

      let category = action.payload === "DESCENDENTE" ?
        orderedCategory.sort((a, b) => {
          if (a.email > b.email) {
            return 1
          }
          if (b.email > a.email) {
            return -1
          }
          return 0
        }) : action.payload === "ASCENDENTE" ?
          orderedCategory.sort((a, b) => {
            if (a.email > b.email) {
              return -1
            }
            if (b.email > a.email) {
              return 1
            }
            return 0
          }) : orderedCharacters

      return {
        ...state,
        users: category
      }
    default:
      return state;
  }
  
};
export const userBanReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BAN:
      return { loading: true };
    case USER_BAN_SUCCES:
      return { loading: false, userInfo: action.payload };
    case USER_BAN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADMIN:
      return { loading: true };
    case USER_ADMIN_SUCCES:
      return { loading: false, userInfo: action.payload };
    case USER_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};