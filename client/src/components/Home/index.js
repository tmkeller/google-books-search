import React from 'react';
import "./style.css";

function Home() {

    return (
        <div className="col-sm-12">
            <h1 className="home_welcome">Welcome!</h1>
            <p className="home_p">
                Welcome! This is a full-stack application to query the Google Books API.
                Go to Search to find books and save them to the database to view later, or Saved to view saved books.
            </p>
        </div>
    )
}

export default Home;