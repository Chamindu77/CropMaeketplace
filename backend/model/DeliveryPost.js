const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryPostSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  model: {
    type: String,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },

  vehicleImage: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: false,
  },
  mobile: {
    type: String,
    require: true,
  },
  land: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  address: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("DeliveryPost", DeliveryPostSchema);
