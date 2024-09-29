const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateNewUser,
  getCreateNewUser,
  UpdateNewUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/create", getCreateNewUser);

router.post("/create-user", postCreateNewUser);
router.get("/update/:userID", UpdateNewUser);

module.exports = router;
