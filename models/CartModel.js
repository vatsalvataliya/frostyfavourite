const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    Item_Id: {
    type: String,
    required: true,
  },
  User_Id: {
    type: String,
    required: true,
  },
//   user_data: {
//     type: Array,
//     required: true,
//   },
//   item_data: {
//     type: Array,
//     required: true,
//   },
});

module.exports = mongoose.model("AddToCart", taskSchema);
