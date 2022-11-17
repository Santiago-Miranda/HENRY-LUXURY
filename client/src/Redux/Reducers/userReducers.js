import {
  USER_CONFIRM_PASSWORD,
  USER_CONFIRM_PASSWORD_FAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_RESET_PASSWORD,
  USER_RESET_PASSWORD_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_CONFIRM_MAIL,
  USER_CONFIRM_MAIL_FAIL,
  USER_LOGIN_GOOGLE_FAIL,
  USER_LOGIN_GOOGLE_REQUEST,
  USER_LOGIN_GOOGLE_SUCCESS,
  USER_LOGOUT_GOOGLE
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

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// USER DETAILS
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



//* RESET PASSWORD
export const userResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD:
      return { loading: true };
     case USER_RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


//* CONFIRM PASSWORD userConfirmPassword
export const  userConfirmPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONFIRM_PASSWORD:
      return { loading: true };
     case USER_CONFIRM_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//* Confirm mail + codigode verificacion  userConfirmMail
export const  userConfirmMailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONFIRM_MAIL:
      return { loading: true };
     case  USER_CONFIRM_MAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



//google
export const googleLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_GOOGLE_REQUEST:
      return { loading: true };
    case USER_LOGIN_GOOGLE_SUCCESS:
      return { loading: false, userGoogle: action.payload };
    case USER_LOGIN_GOOGLE_FAIL:
      return { loading: false, error: action.payload };
      case USER_LOGOUT_GOOGLE:
        return {};
    default:
      return state;
  }
};
/*
export const logoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_GOOGLE:
      return {};
      default:
      return state;
  }
}*/