const express = require("express");
const router = express.Router();
const User = require("../../models/User");

//GET: http://localhost:3333/user/test
//DESC:TESTING ROUTE
//PUBLIC
router.get("/test", function(req, res) {
  res.send({ msg: "User Registration and Login page" });
});

//POST: http://localhost:3333/user/register
//DESC: POST ROUTE FOR REGISTRATION
//PUBLIC
router.post("/register", function(req, res) {
  //create an object for sending to db using body data
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
  });
  //save it to the mongodb
  newUser
    .save()
    .then(user => {
      res.json({ user });
    })
    .catch(err => console.log(err));
});

//GET: http://localhost:3333/user/allposts
//DESC:GET ROUTE FOR GETTING ALL POSTS
//PUBLIC
router.get("/allposts", function(req, res) {
  //mongoose method to find all docs in the data base
  User.find({})
    .then(user => {
      res.json({ user });
    })
    .catch(err => console.log(err));
});

module.exports = router;
