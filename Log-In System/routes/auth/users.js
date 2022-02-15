const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

require("dotenv").config();

const initializePassport = require("../../passport-config");

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

router.use(flash());
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

router.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

router.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const newMember = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push(newMember);
    console.log("in");
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

router.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;
