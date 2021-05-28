const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../keys");

const userModel = require("../model/userModel");

router.get("/all", (req, res) => {
  userModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  userModel.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/registration", (req, res) => {
  userModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json("Email already exists");
    } else {
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then((user) => {
              res.send(user);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Server error in da house");
            });
        });
      });
    }
  });
});

router.get("/test", (req, res) => {
  res.send({ msg: "Test route." });
});

module.exports = router;
