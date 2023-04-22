//-------------1st step-----------------------
//step1 here we import home.ejs file
module.exports.home = function (req, res) {
 //print cookie on node
  console.log(req.cookies);
  //change or make cookie
  res.cookie('userid',25)
  return res.render("home", {
    title: "Home",
  });
};
