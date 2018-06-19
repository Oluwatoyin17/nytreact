const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.get("/api/articles", nytController.find);
// Save articles
router.post("/api/articles", nytController.create);
// delete saved articles
router.delete("/api/articles/:id", nytController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;