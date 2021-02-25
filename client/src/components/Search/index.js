import React from 'react';
import "./style.css";
import axios from "axios";
import mongoose from "mongoose";
import BookCard from "../BookCard";

function Search() {

    const saveBook = () => {
        console.log( "saveBook" );
    }

    const books = [
        {
            title: "The Lord of the Rings: The Return of the King",
            authors: [ "JRR Tolkien" ],
            description: "They finally kick Sauron's ass out of Arda.",
            image: "https://placekitten.com/200/200",
            link: "https://questionablecontent.net"
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            authors: [ "JRR Tolkien" ],
            description: "What's with this Sauron guy, anyway??.",
            image: "https://placekitten.com/200/200",
            link: "https://questionablecontent.net"
        },
        {
            title: "The Lord of the Rings: The Two Towers",
            authors: [ "JRR Tolkien" ],
            description: "Saruman is a big dummy.",
            image: "https://placekitten.com/200/200",
            link: "https://questionablecontent.net"
        }
    ]

    return (
        <div>
            <div className="input-group search_input">
                <input type="text" className="form-control" placeholder="Search Google Books" aria-label="Search"/>
            </div>
            <h1 className="searched_books">Searched Books</h1>
            <div className="container">
                { books.map( ( data, index ) => { return <BookCard key={ index } handleButtonClick={ saveBook } data={ data } />})}
            </div>
        </div>
    )
}

export default Search;