const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const login_validations = require("../../validation/login");
const register_validations = require("../../validation/register");

// router.get("/", (req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(404).json({ notweetsfound: "No users found" }));
// });

router.get('/current', passport.authenticate("jwt", { session: false }),(req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    });
  }
);

router.post('/register', (req, res) => {
  debugger
  const { errors, isValid } = register_validations(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email.toLowerCase() }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user already exists with this email" });
    } else {
      const newUser = new User({
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        password2: req.body.password2,
        // name: req.body.name,
        // birthday: req.body.birthday,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = {
                id: user.id,
                email: user.email,
                password: user.password,
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    id: user.id,
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  debugger
  const { errors, isValid } = login_validations(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          birthday: user.birthday,
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});





module.exports = router;
