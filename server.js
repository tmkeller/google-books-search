const express = require("express");
const path = require("path");
const mongoose = require( "mongoose" );

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require( "./routes/apiRoutes" );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.get( "/cats", ( req, res ) => {
  res.json( "MEOW!" );
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
