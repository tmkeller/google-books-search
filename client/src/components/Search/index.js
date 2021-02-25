import React, { useEffect, useState } from 'react';
import "./style.css";
import BookCard from "../BookCard";
import API from '../../utils/API';

function Search() {

    const [ books, setBooks ] = useState([])
    const [ search, setSearch ] = useState();

    const saveBook = ( data ) => {
        console.log( "saveBook" );
        API.saveBook( data ).then( res => {
            console.log( res );
        })
        .catch( err => console.log( err ))
    }

    const loadGoogleBooks = ( query ) => {
        API.getGoogleBooks( query )
        .then(( res ) => {
            if ( res ) {
                let arr = res.data.items.map(( book ) => {
                    let obj = book.volumeInfo;
                    return {
                        title: obj.title || "",
                        description: obj.description || "No description provided",
                        image: ( obj.imageLinks ? obj.imageLinks.thumbnail : "" ),
                        link: obj.infoLink || "",
                        authors: obj.authors || ""
                    }
                });
                setBooks( arr );
            }
        })
        .catch( err => console.log( err ));
    }

    const handleInputChange = event => {
        setSearch( event.target.value );
        loadGoogleBooks( event.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="input-group search_input">
                    <input 
                        onChange={ handleInputChange }  
                        type="text" 
                        className="form-control" 
                        placeholder="Search Google Books" 
                        aria-label="Search"
                    />
                </div>
            </form>
            <h1 className="searched_books">Searched Books</h1>
            <div className="container">
                { books.map( ( data, index ) => { return <BookCard key={ index } handleButtonClick={ saveBook } data={ data } />})}
            </div>
        </div>
    )
}

export default Search;