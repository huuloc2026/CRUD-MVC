const connection = require("../config/database");
//
const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getHomepagewithImage = (req, res) => {
  res.render("sample.ejs");
};
const postCreateNewUser = (req, res) => {
  console.log(">>>check request", req.body);
  res.send("Created new user");
};

module.exports = { getHomepage, getHomepagewithImage, postCreateNewUser };
