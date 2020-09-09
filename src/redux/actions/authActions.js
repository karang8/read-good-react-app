/* eslint-disable import/prefer-default-export */
import { SIGNUP_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAIL } from './types';

// export const loadUser = () => (dispatch) => {
//   fetch('http://localhost:3001/user/')
// }

export const signUp = ({ fname, lname, email, password }) => (dispatch) => {
  console.log('in action')

  const body = {
    fname, lname, email, password,
  };
  console.log(body);
  fetch('http://readgoodmongoapi.herokuapp.com/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === 409 ||result.status === 422) {
        // console.log(result.Error);
        dispatch({
          type: SIGNUP_FAIL,
          payload: result,
        });
        // error.stat
      } else {
        result.msg = '';
        console.log(result)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: result,
        });
      }
    }).catch((err) => {
      console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.message,
      });
    });
};


export const signIn = ({ email, password }) => (dispatch) => {
  console.log('in action')

  const body = {
    email, password,
  };
  console.log(body);
  fetch('http://readgoodmongoapi.herokuapp.com/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json())
    .then((result) => {
      console.log(result);
      if (result.status === 409 ||result.status === 422) {
        // console.log(result.Error);
        dispatch({
          type: SIGNUP_FAIL,
          payload: result,
        });
        // error.stat
      } else {
        result.msg = '';
        console.log(result)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: result,
        });
      }
    }).catch((err) => {
      console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.message,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: '',
  };
};