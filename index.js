const express = require("express");
const urlRoute = require("./routes/url");
const connectToDB = require("./connect");
const { connect } = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

connectToDB('mongodb://localhost:27017/url-shortener');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/', urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});