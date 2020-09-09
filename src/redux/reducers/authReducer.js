/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_PASS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  msg: '',
};

export default function (state = initialState, action) {
  console.log('in reducer')
  switch (action.type) {
    case LOGIN_PASS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      const newState = JSON.parse(JSON.stringify(state));
      console.log('register success');
      console.log(action.payload)
      return {
        ...newState,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        status: 200,
        msg: '',
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      const newStateFail = JSON.parse(JSON.stringify(state));
      return {
        ...newStateFail,
        token: null,
        user: null,
        isAuthenticated: false,
        msg: action.payload,
      };
      

    default:
      return state;
  }
}
