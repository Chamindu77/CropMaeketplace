const router = require("express").Router();
const DeliveryPost = require("../model/DeliveryPost");

//http://localhost:8070/sellerorders/add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const model = req.body.model;
  const capacity = req.body.capacity;
  const vehicleImage = req.body.vehicleImage;
  const price = req.body.price;
  const district = req.body.district;
  const company = req.body.company;
  const mobile = req.body.mobile;
  const land = req.body.land;
  const email = req.body.email;
  const address = req.body.address;

  const newDiliveryPost = new DeliveryPost({
    name,
    model,
    capacity,
    vehicleImage,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
  });

  newDiliveryPost
    .save()
    .then(() => {
      res.json("New Deliverypost added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/sellerorder/
router.route("/").get((req, res) => {
  DeliveryPost.find()
    .then((deliveryposts) => {
      res.json(deliveryposts);
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/sellerorder/update/id
router.route("/update/:id").put(async (req, res) => {
  let deliveryPostID = req.params.id;
  const {
    name,
    model,
    capacity,
    vehicleImage,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
  } = req.body;
  const updateDeliveryPost = {
    name,
    model,
    capacity,
    vehicleImage,
    price,
    district,
    company,
    mobile,
    land,
    email,
    address,
  };

  await DeliveryPost.findByIdAndUpdate(deliveryPostID, updateDeliveryPost)
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
  let deliveryPostID = req.params.id;

  await DeliveryPost.findByIdAndDelete(deliveryPostID)
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
  let deliveryPostID = req.params.id;
  await DeliveryPost.findById(deliveryPostID)
    .then((deliverypost) => {
      res.status(200).send({ status: "user fetched", DeliveryPost });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

module.exports = router;
