import React, {Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { 
  NavItem,
  Collapse,
  NavbarToggler,
  Container,
  NavLink
 } from 'reactstrap';
// import {Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import styles from '../css/navbar.module.css';
import Signup from '../components/auth/signup';
import Signin from '../components/auth/signin';
import Logout from '../components/auth/logout'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import NavLink from 'react-bootstrap/NavLink';


class Navigate extends React.Component {
  state = {
    access:false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() { 
    const { isAuthenticated, user } = this.props.auth;

    const privateLinks =(
      <Fragment>
      <NavItem>
         <Link to="/" className={styles.Link}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/books" className={styles.Link}>Books</Link>
      </NavItem>
      <NavItem>
          <Link to="/authors" className={styles.Link}>Authors</Link>
      </NavItem>
      <NavItem>      
          <Link to="/authors/add" className={styles.Link}>Add Authors</Link>
      </NavItem>
      <NavItem>                
          <Link to="/books/add" className={styles.Link}>Add Books</Link>
      </NavItem>
      <NavItem>              
          <Logout />
      </NavItem>
      </Fragment>
    );

    const publicLinks =(
      <Fragment>
      <NavItem>
         <Link to="/" className={styles.Link}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/books" className={styles.Link}>Books</Link>
      </NavItem>
      <NavItem>
          <Link to="/authors" className={styles.Link}>Authors</Link>
      </NavItem>
      <NavItem>
            <Signin />
          </NavItem>
      <NavItem>
            <Signup />
          </NavItem>
      </Fragment>
    )
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/" className={styles.Link}>GoodReads</Link></Navbar.Brand>
        <Nav className="mr-auto">
        <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {localStorage.getItem('token') ? privateLinks : publicLinks}
              </Nav>
            </Collapse>
          </Container>
          {/* <NavItem>
            <Signup />
          </NavItem>
          <NavItem>
            <Signin />
          </NavItem> */}
          {/* <NavItem>
            <Link to="/" className={styles.Link}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/books" className={styles.Link}>Books</Link>
          </NavItem>
          <Link to="/authors" className={styles.Link}>Authors</Link>
          <Link to="/authors/add" className={styles.Link}>Add Authors</Link>
          <Link to="/books/add" className={styles.Link}>Add Books</Link> */}
        </Nav>
      </Navbar>
  );
};
}

Navigate.propTypes = {
  auth:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
  null
)(Navigate);
