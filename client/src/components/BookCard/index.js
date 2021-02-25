import React from 'react';
import "./style.css";
import bookDefault from "./assets/book.png";

function BookCard( props ) {

    return (
        
        <div className="container book_card">
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <h4 className="book_title">{ props.data.title }</h4><br/>
                    <p className="authors_list">Written by: { props.data.authors }</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <button 
                        onClick={ () => { props.handleButtonClick( props.data._id || props.data )} } 
                        className={ props.page ==="saved" ? "delete_button btn btn-danger" : "delete_button btn btn-primary" }
                    >
                        { props.page === "saved" ? "Delete" : "Save" }
                    </button>
                    <a className="view_button btn btn-light" href={ props.data.link }>
                        View
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <img className="book_image" src={ props.data.image || bookDefault } alt={ props.data.title + " cover image" } />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9">
                    <p>
                        { props.data.description }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookCard;