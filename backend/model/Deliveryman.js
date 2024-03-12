const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverymanSchema = new Schema({
  userRole: {
    type: String,
  },

  fname: {
    type: String,
  },

  lname: {
    type: String,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
  },

  district: {
    type: String,
  },
});

module.exports = mongoose.model("deliveryman", deliverymanSchema);
