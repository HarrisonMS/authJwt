const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ api: "You figured it out!" });
});

module.exports = router;
