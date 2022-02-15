const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.set("view-engine", "ejs");

app.use("/", require("./routes/auth/users.js"));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
