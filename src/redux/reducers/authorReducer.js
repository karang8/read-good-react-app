/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import {
  FETCH_AUTHORS, DELETE_AUTHORS, ADD_AUTHOR, UPDATE_AUTHORS,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTHORS:
      // eslint-disable-next-line no-console
      const newState = JSON.parse(JSON.stringify(state));
      newState.items = action.payload;
      state = JSON.parse(JSON.stringify(newState));
      return state;

    case DELETE_AUTHORS:
      const newStateDelete = JSON.parse(JSON.stringify(state));
      newStateDelete.items = newStateDelete.items.filter((author) => {
        return author.A_ID !== parseInt(action.payload);
      });
      state = JSON.parse(JSON.stringify(newStateDelete));
      return state;

    case ADD_AUTHOR:
      const newStateAdd = JSON.parse(JSON.stringify(state));
      newStateAdd.items.push(action.payload);
      newStateAdd.item = action.payload;
      state = JSON.parse(JSON.stringify(newStateAdd));
      return state;

    case UPDATE_AUTHORS:
      const newStateUpdate = JSON.parse(JSON.stringify(state));
      const data = JSON.parse(action.payload);
      newStateUpdate.items.map((item) => {
        if (item.A_ID === data.A_ID) {
          item.Name = data.Name;
          item.A_img = data.A_img;
          item.Born = data.Born;
          item.DOB = data.DOB;
          item.Website = data.Website;
        }
      });

      state = JSON.parse(JSON.stringify(newStateUpdate));
      return state;

      // return Object.assign({}, state, newStateUpdate);
    default:
      return state;
  }
}
