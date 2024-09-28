const getHomepage = (req, res) => {
  res.send("Hello World! ");
};
const getHomepagewithImage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getHomepagewithImage };
