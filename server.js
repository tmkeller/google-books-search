const express = require("express");
const path = require("path");
const mongoose = require( "mongoose" );

const PORT = process.env.PORT || 3001;
const app = express();

const db = require( "./models" );

app.use( express.urlencoded({ extended: true }));
app.use( express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.get( "/api/books", ( req, res ) => {
  db.Book.find()
    .then( data => { res.json( data )})
    .catch( err => { res.status( 500 ).send( err )});
})

app.post( '/api/books', ( req, res ) => {
  db.Book.create( req.body )
  .then( data => { res.json( data )})
  .catch( err => { res.status( 500 ).send( err )})
})

app.delete( '/api/book/:id', ( req, res ) => {
  db.Book.findByIdAndRemove({ _id: req.params.id })
  .then( data => { res.json( data )})
  .catch( err => { res.status( 500 ).send( err )})
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
