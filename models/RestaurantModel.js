const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    Restau_name: {
    type: String,
    required: true,
  },
  Cate_id: {
    type: Array,
    required: true,
  },
  Cate_name: {
    type: Array,
    required: true,
  },

});

module.exports = mongoose.model("Restaurant", restaurantSchema);
