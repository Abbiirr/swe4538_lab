const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");

const fs = require("fs");

router.get("/", getCV);
router.get("/form", (req, res) => {
  res.render("form");
});
router.post("/form", getCV);

module.exports = router;
