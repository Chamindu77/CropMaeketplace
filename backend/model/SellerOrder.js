const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SellerOrderSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  item: {
    type: String,
    require: true,
  },

  productImage: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    min: 0,
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
  expireDate: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("SellerOrder", SellerOrderSchema);
