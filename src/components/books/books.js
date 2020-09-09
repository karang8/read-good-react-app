/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Delete from '../delete';
// import {fetchBooks} from '../config'
import { fetchBooks, deleteBooks } from '../../redux/actions/bookActions';
import Book from './book';

class Books extends Component {
  componentWillMount() {
    const { props } = this;
    if (props.books === undefined || props.books.length === 0) {
      props.fetchBooks();
    }
    // console.log(props);
  }

  DeleteBook(e) {
    const { props } = this;
    props.deleteBooks(e.target.value);
  }

  render() {

    const { books, isAuthenticated, token } = this.props;

    const userFacility = (
      <Fragment>
        {books.map(book => (
          <div className="col-sm-3" key={book.B_ID}>
            <Book book={book} />
            <Delete value={book.B_ID} onDelete={this.DeleteBook.bind(this)} />
            <Link to={{
              pathname: `/books/update/${book.B_ID}`,
            }}
            >
              <button type="button">Update</button>
            </Link>
          </div>
        ))}
      </Fragment>
    );

    const publicFacility = (
      <Fragment>
        {books.map(book => (
          <div className="col-sm-3" key={book.B_ID}>
            <Book book={book} />
          </div>
        ))}
      </Fragment>
    );

    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            {token ? userFacility : publicFacility}
          </div>
        </div>
      </div>
    );
  }
}

const mapsStatesToProps = state => ({
  books: state.books.items,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

Books.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  deleteBooks: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  token: PropTypes.string,
};

export default connect(mapsStatesToProps, { fetchBooks, deleteBooks })(Books);
