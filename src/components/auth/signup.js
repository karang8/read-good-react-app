import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { signUp } from '../../redux/actions/authActions'
import styles from '../../css/navbar.module.css';

class SignupModal extends Component {
  state = {
    modal:false,
    fname:'',
    lname:'',
    email:'',
    password:'',
    msg: '',
  }

  toggle = () => {
    this.setState({
      modal:!this.state.modal
    });
  };

componentDidUpdate(prevProps) {
  console.log(this.props,'this.props');
  console.log(prevProps,'prevProps')
  const { status, msg } = this.props;
  if(msg !== prevProps.msg) {
    if(status===409||status===422) {
      this.setState({
        msg: msg,
      })
    } else if(status===200) {
      this.setState({
        msg:''
      })
    }
  }
}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const { fname, lname, email, password } = this.state;
    const newUser = {
      fname,
      lname,
      email,
      password,
    };

    this.props.signUp(newUser);
    

  }
  render() {
    console.log(this.state)
    return (
    <div>
    <Link to="#" onClick={this.toggle} className={styles.Link}>Signup</Link>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
        <ModalBody>
          {this.state.msg ? (
            <Alert color='danger'>{this.state.msg}</Alert> 
          ):null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
            <Label for='fname'>First Name</Label>
            <Input
            type='text'
            name='fname'
            placeholder='First Name'
            onChange={this.onChange} />
            <Label for='lname'>Surame</Label>
            <Input
            type='text'
            name='lname'
            placeholder='Surname'
            onChange={this.onChange} />
            <Label for='email'> Email</Label>
            <Input
            type='email'
            name='email'
            placeholder='Email'
            onChange={this.onChange} />
            <Label for='password'> Password</Label>
            <Input
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.onChange} />
            <Button color='dark' style = {{ marginTop: '2rem' }} block>
              SignUp
            </Button>
            </FormGroup>
          </Form>
          </ModalBody>
          </Modal>
    </div>    
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return{
  isAuthenticated: state.auth.isAuthenticated,
  msg: state.auth.msg.msg,
  status: state.auth.msg.status,
  }
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
// })

SignupModal.propTypes = {
  signUp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  msg: PropTypes.string,
}

export default connect(
  mapStateToProps,
  { signUp }
)(SignupModal);