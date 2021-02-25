import axios from "axios";

export default {
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function( bookData ) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function( id ) {
    return axios.delete("/api/book/" + id);
  },
  // Gets results from Google Books
  getGoogleBooks: function( query ) {
    return axios.get( "https://www.googleapis.com/books/v1/volumes?q=" + query );
  }
};