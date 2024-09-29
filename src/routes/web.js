const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateNewUser,
  getDataTable,
  getCreateNewUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/create", getCreateNewUser);

router.post("/create-user", postCreateNewUser);
router.get("/database", getDataTable);

module.exports = router;
