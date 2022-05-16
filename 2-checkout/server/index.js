require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const Model = require("./Models.js");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//--------USER ROUTES---------

//post /user
app.post('/user', (req, res) => {
  //User data[id, s_id, name, email, PW, address(null), card(null), hasCO (false)]

  console.log(req.session_id);
  var sampleData = ["kdnfdkssfeegdd-fkaofnd", "randomName", "email@email", "PWordy", "False"]
  Model.postUserData(sampleData)
    .then(
      (result) => console.log(result))
    .catch(err => console.log(err));
});

//get /user
app.get('/user', (req, res) => {
  console.log(req.session_id);
  Model.getUserData(req.session_id)
    .then((result) =>
    res.status(200).send(result[0][0]))
    .catch(err => console.log(err));
});
//update /user
app.patch('/user', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.delete('/user', (req, res) => {

})

//----------ADDRESS ROUTES-----------

//post /address
//get /address
app.get('/address', (req, res) => {
  console.log(db.queryAsync(
    `SELECT id FROM Users WHERE s_id = ?`,
    req.session_id));
  Model.getAddressData(sampleData)
    .then((result) =>
    res.status(200).send(result[0][0]))
    .catch(err => console.log(err));
});
//update /address

//-----------CARD ROUTES--------------

//post /card
//get /card
//update /card



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
