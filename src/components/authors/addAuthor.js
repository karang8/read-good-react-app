import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAuthors } from '../../redux/actions/authorActions'

class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            dob:'',
            born:'',
            website:'',
            img:'',
            redirect: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data ={
            Name:this.state.name,
            DOB:this.state.dob,
            Born:this.state.born,
            Website:this.state.website,
            A_img:this.state.img,
        }
        console.log(this.props.addAuthors)
        this.props.addAuthors(data);
            this.setState({
                redirect: true,
            })
    }
 
    render() {
        const redirect = this.state.redirect;
        if(redirect===true) {
            return <Redirect to="/authors" />
        }
        return (
     <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <tbody>
                            <tr>
                            <td>Author name</td>
                            <td><input type="text" name="name" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>DOB</td>
                            <td><input type="date" name="dob" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>Born</td>
                            <td><input type="text" name="born" onChange={this.handleChange} /></td>
                            </tr>        
                            <tr>
                            <td>Website</td>
                            <td><input type="" name="website" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>Image:</td>
                            <td><input type="text" name="img" onChange={this.handleChange} /></td>
                            </tr>    
                            <tr>
                            <td colSpan="2"><input type="submit" value="Save"  /></td>
                            </tr>
                        </tbody>
                        </Form>
                    </div>
             </div>
        
            </div>
        )
    }
}

  
AddAuthor.propTypes = {
addAuthors: PropTypes.func,
};

export default connect(null, { addAuthors })(AddAuthor);