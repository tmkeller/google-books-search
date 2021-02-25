import React, { useEffect, useState } from 'react';
import "./style.css";
import API from "../../utils/API";
import BookCard from "../BookCard";

function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadSavedBooks();
    }, [])

    const loadSavedBooks = () => {
        API.getSavedBooks()
        .then( res => setBooks( res.data ))
        .catch( err => console.log( err ))
    }

    const deleteBook = ( id ) => {
        console.log( "deleteBook", id );
        API.deleteBook( id )
        .then( res => {
            console.log( res );
            loadSavedBooks();
        })
    }

    return (
        <div>
            <h1 className="saved_books">Saved Books</h1>
            <div className="container">
                { books.map(( data, index ) => { return <BookCard key={ index } handleButtonClick={ deleteBook } data={ data } page="saved" />})}
            </div>
        </div>
    )
}

export default Saved;