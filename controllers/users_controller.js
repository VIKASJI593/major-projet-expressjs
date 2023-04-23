const User = require("../models/user");

module.exports.profile = async function (req, res) {
    try {
      const userId = req.cookies.user_id;
      if (!userId) {
        return res.redirect("/users/sign-in");
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.redirect("/users/sign-in");
      }
   
      return res.render("user_profile", {
        title: "User Profile",
        user: user,
      });
    } catch (err) {
      console.log("Error in fetching user profile: ", err);
      return res.redirect("/users/sign-in");
    }
  };

// render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codeial | Sign In",
  });
};

// get the sign up data
module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    let user2 = await User.create(req.body)
    return res.redirect("/users/sign-in");
     
   
  } else {
    return res.redirect("back");
  }
};

// sign in and create a session for the user
module.exports.createSession = async function  (req, res) {
  // steps to authenticate
  // find the user
  try {
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      // handle user not found
      return res.redirect("back");
    }
  
    if (user.password !== req.body.password) {
      // handle password which doesn't match
      return res.redirect("back");
    }
  
    // handle session creation
    res.cookie("user_id", user.id);
    return res.redirect("/users/profile");
  } catch (err) {
    console.log("error in finding user in signing in");
    return;
  }
}