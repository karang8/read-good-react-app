import React, {useState,useEffect} from 'react';
import Book from './book'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Link} from 'react-router-dom'
import Delete from '../delete'
const Hooksbooks = () => {

    const[books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then(results => results.json())
        .then(data => {
            setBooks(data)
        })
    },[])

    function DeleteBook(e) {
        const id = e.target.value;
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this book?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    console.log(id);
                    fetch(`http://localhost:8000/books/${id}`,{
                        method:'DELETE',
                    })
                    .then(result=> result.json())
                .then(response => {
                    console.log('Success:', response)
                    let tempState = books;
                    console.log(tempState)
                    tempState = tempState.filter((ele)=>{
                        return ele.B_ID!=id;
                    })
                    setBooks(tempState)
                    console.log(books)

                });
                }
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });

}   
// console.log(books)
let deleted='/books/delete/';
let updated;
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <div className="row">
        {books.map((book, key)=>
            <div className="col-sm-3">
            <Book book={book} key={book.B_ID} />
            {deleted +=book.B_ID}
            <Delete value={book.B_ID} path={deleted} onClick={DeleteBook} />
            {updated = "/books/update/"+book.B_ID}
            
            <Link to={{
                pathname:updated, 
            }} >
            <button>Update</button>            
            </Link>
            </div>
        )}
        </div>
    </div>
</div>
    );
}

export default Hooksbooks;
