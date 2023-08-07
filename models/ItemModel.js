const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Cate_id: {
    type: String,
    required: true,
  },
  Item_name: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Item", taskSchema);
