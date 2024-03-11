const router = require("express").Router();

const Deliveryman = require("../model/Deliveryman");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "78rfrbrefhadnbfrf6y9u0jjpm'[khuuv8f93fuqwhisbedfv8w2bdeb";

// Deliveryman registration route
router.post(
  "/register",
  // Validation middleware using express-validator
  [
    body("userRole").notEmpty().withMessage("User role is required"),
    body("fname").notEmpty().withMessage("First name is required"),
    body("lname").notEmpty().withMessage("Last name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
    body("password")
      .notEmpty().withMessage("Password is required")
      .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("district").notEmpty().withMessage("District is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { userRole, fname, lname, email, password, district } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const primaryKey = email + userRole;

      const oldDeliveryman = await Deliveryman.findOne({ primaryKey });
      if (oldDeliveryman) {
        return res.status(400).json({ error: "This Deliveryman already exists!" });
      }

      const newDeliveryman = new Deliveryman({
        userRole,
        fname,
        lname,
        email,
        district,
        password: encryptedPassword,
        primaryKey,
      });

      await newDeliveryman.save();

      res.status(201).json({ message: "New Deliveryman added successfully!" });
    } catch (error) {
      console.error("Error registering deliveryman:", error);
      res.status(500).json({
        error: "Server error. Failed to register deliveryman.",
      });
    }
  }
);

// Login route for a deliveryman
router.post("/login", async (req, res) => {
  try {
    const { email, password, userRole } = req.body;

    console.log("Request body:", req.body); // Log the request body

    const primaryKey = email + userRole;
    const oldDeliveryman = await Deliveryman.findOne({ primaryKey });
    console.log(primaryKey); 

    if (!oldDeliveryman) {
      return res.status(400).json({ error: "This user has not been registered!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, oldDeliveryman.password);
    if (isPasswordMatch) {
      // Generate JWT token for authentication
      const token = jwt.sign({ email: oldDeliveryman.email }, JWT_SECRET);
      return res.status(200).json({ status: "ok", data: token });
    } else {
      return res.status(401).json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: "An error occurred during login" });
  }
});


// Route to fetch deliveryman data
router.post("/userdata", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the JWT token
    const deliveryman = jwt.verify(token, JWT_SECRET);
    const deliverymanEmail = deliveryman.email;
    const data = await Deliveryman.findOne({ email: deliverymanEmail });
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "An error occurred while fetching deliveryman data" });
  }
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
