import { confirmAlert } from 'react-confirm-alert';
import {
  FETCH_BOOKS, DELETE_BOOKS, ADD_BOOK, UPDATE_BOOKS,
} from './types';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const fetchBooks = () => (dispatch) => {
//   console.log('in fettchBooks');
  fetch('http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/books')
    .then(results => results.json())
    .then((books) => {
      dispatch({
        type: FETCH_BOOKS,
        payload: books,
      });
    });
};

export const deleteBooks = id => (dispatch) => {
  console.log('in deleteBooks');
  // const id = e.target.value;
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure you want to delete this book?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          console.log(id);
          fetch(`http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/books/${id}`, {
            method: 'DELETE',
          })
            .then(result => result.json())
            .then((response) => {
              console.log('Success:', response);
              dispatch({
                type: DELETE_BOOKS,
                payload: id,
              });
            });
        },
      },
      {
        label: 'No',
        onClick: () => alert('Click No'),
      },
    ],
  });
};

export const addBooks = data => (dispatch) => {
  fetch('http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/books/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(result => result.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', response);
      console.log('Success:', data);
      dispatch({
        type: ADD_BOOK,
        payload: data,
      });
    });
};

export const updateBooks = (id, data) => (dispatch) => {
  fetch(`http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(result => result.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', response);
      dispatch({
        type: UPDATE_BOOKS,
        payload: JSON.stringify(data),
      });
    });
};
