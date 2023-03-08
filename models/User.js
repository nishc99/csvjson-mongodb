var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Age: {
      type: Number,
    },
    Course: {
      type: String,
    },
  }
  
);

module.exports = mongoose.model("User", userSchema);