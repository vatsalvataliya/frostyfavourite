const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  F_Name: {
    type: String,
    required: true,
  },
  L_Name: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    // required: true,
  },
  Confirm_Password: {
    type: String,
    // required: true,
  }
});

module.exports = mongoose.model("User", taskSchema);
