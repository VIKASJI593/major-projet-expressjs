//-------------1st step-----------------------
//step1 here we import home.ejs file
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Home",
  });
};
