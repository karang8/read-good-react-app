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
import { signIn } from '../../redux/actions/authActions'
import { Link } from 'react-router-dom'
import styles from '../../css/navbar.module.css';

class SigninModal extends Component {
  state = {
    modal:false,
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
  const { status, msg, isAuthenticated } = this.props;
  if(msg !== prevProps.msg) {
    if(status===409||status===422) {
      this.setState({
        msg: msg,
      })
    } else {
      this.setState({
        msg:''
      })
    }
  }

  if(this.state.modal) {
    if(isAuthenticated) {
        this.toggle();
    }
}
}



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    this.props.signIn(user);
  }

  render() {
    console.log(this.state)
    return (
    <div>
    <Link to="#" onClick={this.toggle} className={styles.Link} >Signin</Link>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
        <ModalBody>
          {this.state.msg ? (
            <Alert color='danger'>{this.state.msg}</Alert> 
          ):null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
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
              SignIn
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

SigninModal.propTypes = {
  signIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  msg: PropTypes.string,
}

export default connect(
  mapStateToProps,
  { signIn }
)(SigninModal);