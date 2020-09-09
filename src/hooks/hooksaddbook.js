import React, { useState} from 'react'
// import {Redirect} from 'react-router-dom'


const Hooksaddbook = () => {
    const [name, setName]= useState('');
    const [a_id, setAid]= useState('');
    const [isbn, setIsbn]= useState('');
    const [img, setImg]= useState('');
    const [summary, setSummary]= useState('');

    function handleNameChange(e) {
        setName(e.target.value)
        console.log(name)
        // console.log(arget.value)
    }
    function handleAidChange(e) {
        setAid(e.target.value)
        console.log(a_id)
        // console.log(arget.value)
    }    function handleIsbnChange(e) {
        setIsbn(e.target.value)
        console.log(isbn)
        // console.log(arget.value)
    }    function handleImgChange(e) {
        setImg(e.target.value)
        console.log(img)
        // console.log(arget.value)
    }    function handleSummaryChange(e) {
        setSummary(e.target.value)
        console.log(summary )
        // console.log(arget.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data ={
            Name: name,
            A_ID: a_id,
            ISBN: isbn,
            B_img: img,
            Summary: summary,
        }

        fetch('http://localhost:8000/books/add',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data) 
        }).then(result => result.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response)
            // this.setState({
            //     redirect: true,
            // })
        });
    }

    return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                    <form onSubmit={handleSubmit}>
                        <tbody>
                            <tr>
                            <td>Book name</td>
                            <td><input type="text" name="name" onChange={handleNameChange} /></td>
                            </tr>
                            <tr>
                            <td>Author ID</td>
                            <td><input type="text" name="a_id" onChange={handleAidChange} /></td>
                            </tr>        
                            <tr>
                            <td>ISBN</td>
                            <td><input type="number" name="isbn" onChange={handleIsbnChange}/></td>
                            </tr>
                            <tr>
                            <td>Image</td>
                            <td><input type="text" name="img" onChange={handleImgChange}/></td>
                            </tr>
                            <tr>
                            <td>Summary</td>
                            <td><textarea onChange={handleSummaryChange} name="summary" /></td>
                            </tr>    
                            <tr>
                            <td colSpan="2"><input type="submit" value="Save" /></td>
                            </tr>
                        </tbody>
                        </form>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Hooksaddbook;
