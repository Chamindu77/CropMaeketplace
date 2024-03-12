const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    methods: ["GET", "POST"],
  },
});

require("dotenv").config();
const PORT = process.env.PORT || 8070;
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);

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

// Socket.io implementation
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
server.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
