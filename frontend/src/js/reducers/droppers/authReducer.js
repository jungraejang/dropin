import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';

const initState = {
  auid: 0,
  authname: '',
  waiting: false,
  showSignupForm: true,
  username: '',
  password_digest: '',
  birthdate: '', //format ?
  userObj: {},
};

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_USERNAME:
      nextState = {
        ...state,
        username: action.payload,
      };
      return nextState;
    case SET_PASSWORD_DIGEST:
      nextState = {
        ...state,
        password_digest: action.payload,
      };
      return nextState;
    case SET_BIRTHDATE:
      nextState = {
        ...state,
        birthdate: action.payload,
      };
      return nextState;
    case SHOW_SIGNUP_FORM:
      nextState = {
        ...state,
        showSignupForm: action.payload,
      };
      return nextState;
    case CREATING_USER:
      nextState = {
        ...state,
        userObj: action.payload,
      };
      return nextState;
    // case AUTHORIZE_USER:
    //   nextState = {
    //     ...state,
    //     waiting: true,
    //     auid: action.payload.auid,
    //   };
    //   return nextState;
    // case AUTH_ERROR:
    //   console.log('err', action.payload);
    //   nextState = { ...state, waiting: false };
    //   return nextState;
    // case AUTH_USER:
    //   nextState = {
    //     ...state,
    //     waiting: false,
    //     authname: action.payload.username,
    //   };
    //   return nextState;
    default:
      return state;
  }
};
