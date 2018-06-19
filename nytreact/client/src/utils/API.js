import axios from "axios";

export default {
  searchArticles: function(topic, start, end){
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1f87c6898d14476abca16ac5717839df&q=" + topic + "&begin_date=" + start + "0101&end_date=" + end + "1231");
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
