const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Auth_id: {
    type: String,
    // required: true,
    },
  Name: {
    type: String,
    // required: true,
  },
  Email: {
    type: String,
    // required: true,
  },
  Number: {
    type: String,
    // required: true,
  },
  Address: {
    type: String,
    // required: true,
  },
  Total: {
    type: String,
    // required: true,
  },
  Cart_data: {
    type: Array,
    // required: true,
  },
  Cart_Id: {
    type: Array,
    // required: true,
  },

});

module.exports = mongoose.model("OrderDetail", taskSchema);
