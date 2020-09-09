import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateAuthors } from '../../redux/actions/authorActions'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            dob:'',
            born:'',
            website:'',
            img:'',
            a_id:null,
            redirect: false,
        }
    }

    componentDidMount() {
        console.log(this.props)
        const { match : {params}} =this.props;
        console.log(params.id);
        fetch(`http://localhost:8000/authors/${params.id}`)
        .then(results => results.json())
        .then(data => {
            console.log(data)
            this.setState({
                name:data[0].Name,
                dob:data[0].DOB,
                born:data[0].Born,
                img:data[0].A_img,
                website:data[0].Website,
                a_id:data[0].A_ID,
            })
            console.log(this.state)
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Name'+this.state.name)
        console.log('DOB'+this.state.dob)
        console.log('Born'+this.state.born)
        console.log('Website'+this.state.website)
        console.log('Image'+this.state.img)

        const data ={
            Name:this.state.name,
            DOB:this.state.dob,
            Born:this.state.born,
            Website:this.state.website,
            A_img:this.state.img,
            A_ID:this.state.a_id,   
        }
        await this.props.updateAuthors(this.props.match.params.id,data)

        // fetch(`http://localhost:8000/authors/${this.props.match.params.id}`,{
        //     method:'PUT',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data) 
        // }).then(result => result.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => {
        //     console.log('Success:', response)
            this.setState({
                redirect: true,
            })
        // });    
}
    
    render() {
        if(this.state.redirect===true) {
            return <Redirect to="/authors"/>
        }
        return (
            <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <tbody>
                            <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            <td>DOB</td>
                            <td><input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} /></td>
                            </tr>        
                            <tr>
                            <td>Born</td>
                            <td><input type="text" name="born" value={this.state.born} onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Image</td>
                            <td><input type="text" name="img"  value={this.state.img} onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                            <td>Website</td>
                            <td><input type="text" name="website"  value={this.state.website} onChange={this.handleChange}/></td>
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
    updateAuthors: PropTypes.func,
};
    

export default connect(null, { updateAuthors })(Update);

