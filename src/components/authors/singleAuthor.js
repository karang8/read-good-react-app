import React, { Component } from 'react'
import Author from './authors'
import Born from '../../partial/born'
import Dob from '../../partial/dob'
import Website from '../../partial/website'

export default class Singlebook extends Component {
    state = {
        author: [],
    };

    componentDidMount() {
        console.log(this.props)
        const { match : {params}} =this.props;
        console.log(params.id);
        fetch(`http://localhost:8000/authors/${params.id}`)
        .then(results => results.json())
        .then(data => {
            console.log(data)
            this.setState({
                author:data,
            })
        })
    }

    render() {
        console.log(this.state.author.Website)
        return (
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                <div className="col-sm-3">
                <Author author={this.state.author} />
                </div>
                <div className="col-sm-7">
                <Born born={this.state.author.Born} />
                <Dob dob={this.state.author.DOB}/>
                <Website website={this.state.author.Website} />
                </div>
                </div>
            </div>
          </div>
        )
    }
}
