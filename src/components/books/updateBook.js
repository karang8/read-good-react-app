import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateBooks } from '../../redux/actions/bookActions'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            a_id:'',
            isbn:'',
            img:'',
            summary:'',
            b_id:null,
            redirect:false,
        }
    }
    componentDidMount() {
        const { match : {params}} =this.props;
        fetch(`http://localhost:8000/books/${params.id}`)
        .then(results => results.json())
        .then(data => {
            this.setState({
                name:data[0].bookName,
                a_id:data[0].A_ID,
                isbn:data[0].ISBN,
                img:data[0].B_img,
                b_id:data[0].B_ID,
                summary:data[0].Summary
            })
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
            
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
            B_ID:this.state.b_id,
        }
        this.props.updateBooks(this.props.match.params.id,data)
        // fetch(`http://localhost:8000/books/${this.props.match.params.id}`,{
        //     method:'PUT',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data) 
        // }).then(result => result.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => {
        //     console.log('Success:', response)
        //     this.setState({
        //         redirect: true,
        //     })
        // });    
}
    
    render() {
        if(this.state.redirect===true) {
            return <Redirect to="/books"/>
        }
        return (
            <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <tbody>
                            <tr>
                            <td>Book name</td>
                            <td><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>Author ID</td>
                            <td><input type="text" name="a_id" value={this.state.a_id} onChange={this.handleChange} /></td>
                            </tr>        
                            <tr>
                            <td>ISBN</td>
                            <td><input type="number" name="isbn" value={this.state.isbn} onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Image</td>
                            <td><input type="text" name="img"  value={this.state.img} onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Summary</td>
                            <td><textarea onChange={this.handleChange} value={this.state.summary} name="summary" /></td>
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


Update.propTypes = {
    updateBooks: PropTypes.func,
};
    

export default connect(null, { updateBooks })(Update);