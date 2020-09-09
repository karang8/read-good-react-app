import { confirmAlert } from 'react-confirm-alert';
import { FETCH_AUTHORS, DELETE_AUTHORS, ADD_AUTHOR, UPDATE_AUTHORS } from './types';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const fetchAuthors = () => (dispatch) => {
  console.log('in fettchAuthors');
  fetch('http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/authors')
    .then(results => results.json())
    .then((authors) => {
      dispatch({
        type: FETCH_AUTHORS,
        payload: authors,
      });
    });
};

export const deleteAuthors = id => (dispatch) => {
  // const id = e.target.value;
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure you want to delete the author?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          console.log(id);
          fetch(`http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/authors/${id}`, {
            method: 'DELETE',
          })
            .then((result) => {
              result.json();
            }).catch(error => console.error('Error:', error))
            .then((response) => {
              console.log('Success:', response);
              dispatch({
                type: DELETE_AUTHORS,
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

export const addAuthors = data => (dispatch) => {
  console.log(data);
  fetch('http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/authors/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(result => result.json())
    .then((result) => {
      console.log('Success:', result);
      // eslint-disable-next-line no-param-reassign
      data.A_ID = result.insertId;
      dispatch({
        type: ADD_AUTHOR,
        payload: data,
      });
    });
};

export const updateAuthors = (id, data) => (dispatch) => {
  fetch(`http://ec2-13-233-153-131.ap-south-1.compute.amazonaws.com:9000/authors/${id}`, {
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
        type: UPDATE_AUTHORS,
        payload: JSON.stringify(data),
      });
    });
};
