require("dotenv").config();
const express = require("express");
const path = require("path");
const {updateAndSave,
      getAll} = require('./db.js');
const {sampleData} = require('./SampleData.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
  getAll()
  .then((data) => {
    if (data.length !== 0) {
  res.json(data)
    }
  res.json(sampleData);
})
  .catch((err) => {
    console.log(err)
  })
});

app.get('/entry', (req, res) => {
  getAll();
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
