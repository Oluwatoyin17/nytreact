const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const nytSeed = [
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    url: ""
  },
];

db.nytreact
  .remove({})
  .then(() => db.nytreact.collection.insertMany(nytSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });