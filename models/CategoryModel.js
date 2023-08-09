const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Cate_name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Category", taskSchema);
