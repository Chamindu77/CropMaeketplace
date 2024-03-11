const router = require("express").Router();
const SellerOrder = require("../model/SellerOrder");

//http://localhost:8070/sellerorders/add
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

  const newSellerOrder = new SellerOrder({
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

  newSellerOrder
    .save()
    .then(() => {
      res.json("New Seller Order added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/sellerorder/
router.route("/").get((req, res) => {
  SellerOrder.find()
    .then((sellerorders) => {
      res.json(sellerorders);
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/sellerorder/update/id
router.route("/update/:id").put(async (req, res) => {
  let sellerOrderID = req.params.id;
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
  const updateSellerOrder = {
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

  await SellerOrder.findByIdAndUpdate(sellerOrderID, updateSellerOrder)
    .then(() => {
      res.status(200).send({ status: "seller updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by either seller or admin
//http://localhost:8070/sellerorder/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  let sellerOrderID = req.params.id;

  await SellerOrder.findByIdAndDelete(sellerOrderID)
    .then(() => {
      res.status(200).send({ status: "seller deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by admin
//http://localhost:8070/sellerorder/get/id
router.route("/get/:id").get(async (req, res) => {
  let sellerOrderID = req.params.id;
  await SellerOrder.findById(sellerOrderID)
    .then((sellerOrder) => {
      res.status(200).send({ status: "user fetched", sellerOrder });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

module.exports = router;
