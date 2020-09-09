import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBooks } from '../../redux/actions/bookActions'

class AddBook extends Component {
        constructor(props) {
            super(props)
            this.state={
                name:'',
                a_id:'',
                isbn:'',
                img:'',
                summary:'',
                redirect: false,
            }
        }
    
        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value,
            })
        }
    
        handleSubmit = (e) => {
            e.preventDefault();
            const data ={
                Name:this.state.name,
                A_ID:this.state.a_id,
                ISBN:this.state.isbn,
                B_img:this.state.img,
                Summary:this.state.summary,
            }
            const result  = this.props.addBooks(data);
            console.log(result, result)
    }
    render() {
        const redirect = this.state.redirect;
        if(redirect===true) {
            return <Redirect to="/books" />
        }
        return (
            <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <tbody>
                            <tr>
                            <td>Book name</td>
                            <td><input type="text" name="name" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>Author ID</td>
                            <td><input type="text" name="a_id" onChange={this.handleChange} /></td>
                            </tr>        
                            <tr>
                            <td>ISBN</td>
                            <td><input type="number" name="isbn" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Image</td>
                            <td><input type="text" name="img" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Summary</td>
                            <td><textarea onChange={this.handleChange} name="summary" /></td>
                            </tr>    
                            <tr>
                            <td colSpan="2"><input type="submit" value="Save" /></td>
                            </tr>
                        </tbody>
                        </form>
            </div>
        </div>
    </div>
        )
    }
}

  
AddBook.propTypes = {
    addBooks: PropTypes.func,
    books:PropTypes.array
};
    
export default connect(null, { addBooks })(AddBook);
