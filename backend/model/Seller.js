const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
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

module.exports = mongoose.model("Seller", sellerSchema);
