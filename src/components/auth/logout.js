/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/authActions';

class Logout extends Component {
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#">
                Logout
        </NavLink>
      </Fragment>
    );
  }
}


// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
// })

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(
  null,
  { logout },
)(Logout);
