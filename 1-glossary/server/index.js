require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
  //get all data from DB
});

app.get('/entry', (req, res) => {
  //get specific entry
});

app.post('/entry', (req, res) => {
  //post new word/definition
});

app.put('/entry', (req, res) => {
  //update entry in database
});

app.delete('/entry', (req, res) => {
  //delete entry
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
