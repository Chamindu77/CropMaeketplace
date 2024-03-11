const router = require("express").Router();
const FarmerOrder = require("../model/Order");

//http://localhost:8070/order/add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const item = req.body.item;
  const productImage = req.body.productImage;
  const category = req.body.category;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const district = req.body.district;
  const company = req.body.company;
  const mobile = req.body.mobile;
  const land = req.body.land;
  const email = req.body.email;
  const address = req.body.address;
  const expireDate = req.body.expireDate;

  const newFarmerOrder = new FarmerOrder({
    name,
    item,
    productImage,
    category,
    quantity,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
    expireDate,
  });

  newFarmerOrder
    .save()
    .then(() => {
      res.json("New Seller Order added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/order/
router.route("/").get((req, res) => {
  FarmerOrder.find()
    .then((farmerorders) => {
      res.json(farmerorders);
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/order/update/id
router.route("/update/:id").put(async (req, res) => {
  let farmerOrderID = req.params.id;
  const {
    name,
    item,
    productImage,
    category,
    quantity,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
    expireDate,
  } = req.body;
  const updateFarmerOrder = {
    name,
    item,
    productImage,
    category,
    quantity,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
    expireDate,
  };

  await FarmerOrder.findByIdAndUpdate(farmerOrderID, updateFarmerOrder)
    .then(() => {
      res.status(200).send({ status: "seller updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by either seller or admin
//http://localhost:8070/order/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  let farmerOrderID = req.params.id;

  await FarmerOrder.findByIdAndDelete(farmerOrderID)
    .then(() => {
      res.status(200).send({ status: "seller deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by admin
//http://localhost:8070/order/get/id
router.route("/get/:id").get(async (req, res) => {
  let farmerOrderID = req.params.id;
  await FarmerOrder.findById(farmerOrderID)
    .then((sellerOrder) => {
      res.status(200).send({ status: "user fetched", FarmerOrder });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

module.exports = router;
