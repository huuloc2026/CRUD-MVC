const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getHomepagewithImage,
  postCreateNewUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);

router.get("/homepage", getHomepagewithImage);
router.post("/create-user", postCreateNewUser);

module.exports = router;
