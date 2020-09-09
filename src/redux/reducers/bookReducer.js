/* eslint-disable radix */
/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import {
  FETCH_BOOKS, DELETE_BOOKS, ADD_BOOK, UPDATE_BOOKS,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      // eslint-disable-next-line no-console
      console.log('book-reducer', initialState);
      return Object.assign({}, state, {
        items: action.payload,
      });

    case DELETE_BOOKS:
      const newStateDelete = JSON.parse(JSON.stringify(state));
      // eslint-disable-next-line max-len
      newStateDelete.items = newStateDelete.items.filter(book => book.B_ID !== parseInt(action.payload));
      return newStateDelete;

    case ADD_BOOK:
      const newStateAdd = JSON.parse(JSON.stringify(state));
      newStateAdd.items.push(action.payload);
      newStateAdd.item = action.payload;
      state = JSON.parse(JSON.stringify(newStateAdd));
      return state;

    case UPDATE_BOOKS:
      const newStateUpdate = JSON.parse(JSON.stringify(state));
      const data = JSON.parse(action.payload);
      newStateUpdate.items = newStateUpdate.items.filter((item) => {
        if (item.B_ID === data.B_ID) {
          item.bookName = data.Name;
          item.B_img = data.B_img;
          item.A_ID = data.A_ID;
          return item;
        }
        return item;
      });
      state = JSON.parse(JSON.stringify(newStateUpdate));
      return state;
    default:
      return state;
  }
}
