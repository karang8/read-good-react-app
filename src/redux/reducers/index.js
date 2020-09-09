import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';
import authReducer from './authReducer'

export default combineReducers({
  books: bookReducer,
  authors: authorReducer,
  auth: authReducer,
});
