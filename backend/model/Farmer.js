const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
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
  district: {
    type: String,
  },
  password: {
    type: String,
  },

  primaryKey: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Farmer", farmerSchema);
