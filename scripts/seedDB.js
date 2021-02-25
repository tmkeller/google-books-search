const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The Hobbit",
        authors: [ "JRR Tolkien" ],
        description: "The greatest book in history",
        link: "https://thehobbit.com",
        image: "https://placekitten.com/200/300"
    },
    {
        title: "The Lord of the Rings",
        authors: [ "JRR Tolkien" ],
        description: "The other greatest books in history",
        link: "https://lotr.com",
        image: "https://placekitten.com/300/200"
    },
    {
        title: "Ender's Game",
        authors: [ "Orson Scott Card" ],
        description: "Another sweet ass book, even though the author is a jerk",
        link: "https://endersgame.com",
        image: "https://placekitten.com/200/200"
    },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany( bookSeed ))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});