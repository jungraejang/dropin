import {
  SET_USERNAME,
  SET_PASSWORD_DIGEST,
  SET_BIRTHDATE,
  SHOW_SIGNUP_FORM,
  CREATING_USER
  // AUTH_ERROR, AUTH_USER, AUTHORIZE_USER
} from '../../constants';
import { getData, postData } from '../../utils';

const setUsername = username => {
  return { type: SET_USERNAME, payload: username };
};

const setPasswordDigest = passwordDigest => {
  return { type: SET_PASSWORD_DIGEST, payload: passwordDigest };
};

const setBirthdate = birth_date => {
  return { type: SET_BIRTHDATE, payload: birth_date };
};

const showSignupForm = formStatus => {
  return { type: SHOW_SIGNUP_FORM, payload: formStatus };
};

const creatingUser = userObj => {
  return { type: CREATING_USER, payload: userObj };
};

export const createUser = userObj => dispatch => {
  // dispatch(creatingUser);
  userObj.birthdate = '1990-01-01';
  postData('/api/users/new', userObj, res => {
    // res.data; //.username
    console.log('@createUser res.data', res.data);
    // ? dispatch(authUser(res.data))
    // : dispatch(authError(res.data));
    //NOTE: dispatch(toggleSignUpFormVisible)
  });
};

// const authError = err => {
//   return { type: AUTH_ERROR, payload: err };
// };
//
// const authorizeUser = auid => {
//   return { type: AUTHORIZE_USER, payload: auid };
// };
//
// const authUser = user => {
//   return { type: AUTH_USER, payload: user };
// };
//
// export const getAuthUser = api => dispatch => {
//   dispatch(authorizeUser({ auid: api }));
//   getData('/api/users/' + (api || ''), res => {
//     res.data.username
//       ? dispatch(authUser(res.data))
//       : dispatch(authError(res.data));
//   });
// };
