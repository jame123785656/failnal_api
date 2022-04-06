import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookForm() {

    const [book, setBook] = useState("");
    const [result,setResult] = useState([]);
  
    function handleChange(event){
      setBook(event.target.value);
    }
    
    function handleSubmit(event){
      console.log(book);
  
      axios.get("https://se-book-store.herokuapp.com/api/v1/books")
      .then ((response) =>{
        console.log(response);
        setResult(response.data);
      })
    }
  return (
    <div>
        <navbar class="navbar">
            <div class="boxSearch">    
                <input onChange={handleChange}  type="text" name="book" placeholder="Search" />
                <button onClick={()=>{handleSubmit()}} type="submit">Search</button>
            </div>   
        </navbar>


              {result.map(book=>{
                  return(
            
        <div class="books">
              <Link to="/profile" state={{
                title:book.title,
                thumbnailUrl:book.thumbnailUrl,
                isbn:book.isbn,
                pageCount:book.pageCount,
                shortDescription:book.shortDescription,
                authors:book.authors,

                }}>
              <div class="img-book">
              <h3>ชื่อหนังสือ{book.title}</h3>
              <img src={book.thumbnailUrl}  />
              <h4>รหัส{book.isbn}</h4>
              <h4>จำนวน{book.pageCount}หน้า</h4> 
              </div>
              </Link>
              <div class="text-book">
              <h4>{book.shortDescription}</h4>
              <p>Authors: {book.authors} </p>
              </div>
        </div>
              )})}
    </div>

  )
}

export default BookForm


