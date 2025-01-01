// This is the response when API is called
const express = require("express");
const app = express();

// Define a response to an API Restfull verb GET
// Use GET (a route middleware type, just like POST, PUT and DELETE)
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(6500, () => {
  console.log("Server listenning at 6500");
});
