const express = require("express");
const app = express();
const port = 8000;

//----------4th step--------------
// use express router
app.use("/", require("./routes"));

// setup the template enginge to use
app.set("view engine", "ejs");
app.set('views', './views')

//http://localhost:8000/users/profile

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
