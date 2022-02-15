const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

//LASTLY, WE HAVE TO EXPORT THIS MODLE, SO WE CAN USE IT ELSEWHERE
module.exports = User;
