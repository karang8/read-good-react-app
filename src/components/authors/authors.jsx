import React, { Component, Fragment } from 'react';
import Author from './author';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Delete from '../delete';
import { Link } from 'react-router-dom';
import { fetchAuthors, deleteAuthors } from '../../redux/actions/authorActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Authors extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.author) {
      console.log('recieving props')
    }
  }

  componentWillMount() {
    if(this.props.authors === undefined||this.props.authors.length === 0){
    this.props.fetchAuthors();
  }
  console.log(this.props)
  }

  DeleteAuthor = (e) => {
     this.props.deleteAuthors(e.target.value)
  }

  render() {
    console.log(this.props);
    const { authors, isAuthenticated, token } = this.props;
    const userFacility =(
      <Fragment>
       {authors.map((author, index) => (
              <div className="col-sm-3" key={author.A_ID}>
                <Author author={author} />
                    <Delete value={author.A_ID} onDelete={this.DeleteAuthor.bind(this)} />
                    <Link to={{
                        pathname:`/authors/update/${author.A_ID}`,
                    }} >
                    <button>Update</button>
                    </Link>
              </div>
            ))}
      </Fragment>
    )
    const publicFacility =(
      <Fragment>
      {authors.map((author, index) => (
              <div className="col-sm-3" key={author.A_ID}>
                <Author author={author} />
              </div>
          ))}
      </Fragment>
    )

    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            {token ? userFacility : publicFacility }
          </div>
        </div>
      </div>
    );
  }
}

const mapsStatestoProps = state => ({
  authors: state.authors.items,
  author:state.authors.item,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

Authors.propTypes = {
  fetchAuthors: PropTypes.func.isRequired,
  deleteAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  author:PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapsStatestoProps, { fetchAuthors, deleteAuthors })(Authors);
