const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    Cart: {
    type: Array,
    required: true,
  },
//   Item_data: {
//     type: Array,
//     required: true,
//   },
//   user_data: {
//     type: Array,
//     required: true,
//   },
//   item_data: {
//     type: Array,
//     required: true,
//   },
});

module.exports = mongoose.model("PayCartData", taskSchema);
