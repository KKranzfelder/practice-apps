require("dotenv").config();
const express = require("express");
const path = require("path");
const { updateAndSave,
        getAll,
        deleteEntry } = require('./db.js');
const { sampleData } = require('./SampleData.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/entries', (req, res) => {
  console.log('GetAll Request Triggered:')
  getAll()
    .then((data) => {
      if (data.length !== 0) {
        res.json(data)
      } else {
        res.send(sampleData);
      }
    })
    .catch((err) => {
      console.log(err)
    })
});

app.get('/entry', (req, res) => {
  console.log('Get Request Triggered:', req.body)
  getAll(req.body)
    .then((data) => {
      res.send('entry get request done')
    });
});

app.post('/entry', (req, res) => {
  console.log('Post Request Triggered: ', req.body);
  updateAndSave(req.body)
    .then(() => { res.status(201).send('POST request completed') });

});

app.put('/entry', (req, res) => {
  console.log('Put Request Triggered', req.body)
  updateAndSave(req.body)
    .then((data) => {
      res.status(201).send('entry put request done')
    });
});

app.delete('/entry', (req, res) => {
  console.log('Delete Request Triggered: ', req.body);
  deleteEntry(req.body.word)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err));
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
