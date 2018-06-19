const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, trim: true },
  date: { type: Date, default:Date.now, required: true },
  url: { type: String, unique:true, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;