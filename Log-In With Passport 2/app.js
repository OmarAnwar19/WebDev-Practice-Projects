const express = require("express");
const path = require("path");
const session = require("express-session");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const app = express();

const dbURI =
  "mongodb+srv://omar-anwar:Semsem04@cluster0.4nypy.mongodb.net/crashcourse?retryWrites=true&w=majority";
const User = require("./models/user.js");

const PORT = process.env.PORT || 5000;

//GETTING THE LINK TO OUR MONGODB DATABASE
//CONNECTING TO OUR MONGODB DATABASE
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

//ALL OF OUR MIDDLEWARE
//changing our handlebars extension to .hbs, and initializing it, aswell as our view engine
app.engine("handlebars", engine({ extesniodefaultlayout: "main" }));
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "/public")));
//setting up express session
app.use(
  session({
    secret: "J3QU9=S%P?)Mn(xm?72gN_dSRCYx:bqYQfu?5xZ=gr",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ALL OF OUR CODE RELATED TO PASSPORT.JS
app.use(passport.initialize());
//this makes is to so we're not logged out each time we move through our pages
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//A LOCALSTRATEGY IS WHAT IS CALLED AS SOON AS THE USER CLICKS LOG IN
//passport.use means it checks the following using our password
passport.use(
  //DOES THE LOCAL STRATEGY
  new localStrategy((username, password, done) => {
    //find the user by their username
    User.findOne({ username }, (err, user) => {
      //if there is an error, return that error
      if (err) return done(err);
      //if there is no user, that means they forgot their username
      if (!user) return done(null, false, { message: "Incorrect username." });

      //next, we have to compare the real user password, with the password they just entered
      bcrypt.compare(password, user.password, (err, res) => {
        //if there is an error return that error
        if (err) return done(err);

        //if the comparison returns false, that measn they entered a wrong passowrd
        if (res === false)
          //return a message saying that
          return done(null, false, { message: "Incorrect password." });

        //otherwise, if nothing is wrong, then return the user with both their username and password
        return done(null, user);
      });
    });
  })
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

function isLoggedOut(req, res, next) {
  if (!req.isAuthenticated()) return next();
  res.redirect("/");
}

// ROUTES
app.get("/", isLoggedIn, (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("index", { title: "About" });
});

app.get("/login", isLoggedOut, (req, res) => {
  const response = {
    title: "Login",
    error: req.query.error,
  };

  res.render("login", response);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?error=true",
  })
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Setup our admin user
app.get("/setup", async (req, res) => {
  const exists = await User.exists({ username: "admin" });

  if (exists) {
    res.redirect("/login");
    return;
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash("pass", salt, function (err, hash) {
      if (err) return next(err);

      const newAdmin = new User({
        username: "admin",
        password: hash,
      });

      newAdmin.save();

      res.redirect("/login");
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}..`));
