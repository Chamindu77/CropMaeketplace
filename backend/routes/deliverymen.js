const router = require("express").Router();
const Deliveryman = require("../model/Deliveryman");

//done by deliveryman
//http://localhost:8070/deliveryman/register
router.route("/register").post((req, res) => {
  const userRole = req.body.userRole;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  const district = req.body.district;

  const newDeliveryman = new Deliveryman({
    userRole,
    fname,
    lname,
    email,
    district,
    password,
  });

  newDeliveryman
    .save()
    .then(() => {
      res.json("New deliveryman added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//done by admin
//http://localhost:8070/deliveryman/
router.route("/").get((req, res) => {
  Deliveryman.find()
    .then((deliverymen) => {
      res.json(deliverymen);
    })
    .catch((error) => {
      console.log(error);
    });
});

//done by deliveryman
//http://localhost:8070/deliveryman/update/id
router.route("/update/:id").put(async (req, res) => {
  let deliverymanID = req.params.id;
  const { userRole, fname, lname, email, district, password } = req.body;

  const updatedeliveryman = {
    userRole,
    fname,
    lname,
    email,
    district,
    password,
  };

  await Deliveryman.findByIdAndUpdate(deliverymanID, updatedeliveryman)
    .then(() => {
      res.status(200).send({ status: "deliveryman updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by either deliveryman or admin
//http://localhost:8070/deliveryman/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  let deliverymanID = req.params.id;

  await Deliveryman.findByIdAndDelete(deliverymanID)
    .then(() => {
      res.status(200).send({ status: "deliveryman deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by admin
//http://localhost:8070/deliveryman/get/id
router.route("/get/:id").get(async (req, res) => {
  let deliverymanID = req.params.id;
  await Deliveryman.findById(deliverymanID)
    .then((deliveryman) => {
      res.status(200).send({ status: "user fetched", deliveryman });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

module.exports = router;
