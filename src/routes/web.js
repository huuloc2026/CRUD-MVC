const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getHomepagewithImage,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/homepage", getHomepagewithImage);

module.exports = router;
