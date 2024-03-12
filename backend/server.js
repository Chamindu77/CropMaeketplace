const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;
console.log("MongoDB URL:", URL);

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

const productRouter = require("./routes/products");
app.use("/product", productRouter); //http://localhost:8070/student

const farmerRouter = require("./routes/farmers");
app.use("/farmer", farmerRouter); //http://localhost:8070/farmer

const sellerRouter = require("./routes/sellers");
app.use("/seller", sellerRouter); //http://localhost:8070/seller

const sellerOrderRouter = require("./routes/sellerOrders");
app.use("/sellerorder", sellerOrderRouter); //http://localhost:8070/sellerorder

const farmerOrderRouter = require("./routes/farmerOrders");
app.use("/farmerorder", farmerOrderRouter); //http://localhost:8070/sellerorder

const deliveryPostRouter = require("./routes/deliveryposts");
app.use("/deliverypost", deliveryPostRouter); //http://localhost:8070/sellerorder

const deliverymanRouter = require("./routes/deliverymen");
app.use("/deliveryman", deliverymanRouter); //http://localhost:8070/both

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
