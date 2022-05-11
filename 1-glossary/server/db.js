const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:3000/glossary');

const {Schema} = mongoose;

const entrySchema = new Schema({
  id: Number,
  word: String,
  definition: String,
  createdAt: String,
});

const Entry = mongoose.model('Entry', entrySchema);

updateAndSave = (entry) => {
  Promise.all(
    findOneAndUpdate(
      {
        {word: entry.word}
      },
      {

      },
      {

      }
    )
  )

}
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
