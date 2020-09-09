/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Delete(props) {
  return (
    <div>
      <button type="submit" onClick={props.onDelete} value={props.value}>Delete</button>
    </div>
  );
}
