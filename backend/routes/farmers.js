const router = require("express").Router();
const Farmer = require("../model/Farmer");

const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "78rfrbrefhadnbfrf6y9u0jjpm'[khuuv8f93fuqwhisbedfv8w2bdeb";

//done by farmer
//http://localhost:8070/farmer/register
router.post(
  "/register",
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { userRole, fname, lname, email, password, district } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const primaryKey = email + userRole;

      const oldFarmer = await Farmer.findOne({ primaryKey });
      if (oldFarmer) {
        return res.status(400).json({ error: "This Farmer already exists!" });
      }

      const newFarmer = new Farmer({
        userRole,
        fname,
        lname,
        email,
        district,
        password: encryptedPassword,
        primaryKey,
      });

      await newFarmer.save();

      res.status(201).json({
        message: "New farmer added successfully!",
        data: {
          userRole: newFarmer.userRole,
          fname: newFarmer.fname,
          lname: newFarmer.lname,
          email: newFarmer.email,
          district: newFarmer.district,
          password: newFarmer.password,
        },
      });
    } catch (error) {
      console.error("Error registering farmer:", error);
      res.status(500).json({
        error: "Server error. Failed to register farmer.",
      });
    }
  }
);

//done by farmer
//http://localhost:8070/farmer/login
// Login route for a farmer
router.post("/login", async (req, res) => {
  try {
    const { email, password, userRole } = req.body;
    const primaryKey = email + userRole;
    const oldFarmer = await Farmer.findOne({ primaryKey });

    if (!oldFarmer) {
      return res.status(400).json({ error: "This user has not been registered!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, oldFarmer.password);
    if (isPasswordMatch) {
      const token = jwt.sign({ email: oldFarmer.email }, JWT_SECRET);
      return res.status(200).json({ status: "ok", data: token });
    } else {
      return res.status(401).json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: "An error occurred during login" });
  }
});

//done by farmer
router.post("/userdata", async (req, res) => {
  const { token } = req.body;

  try {
    const farmer = jwt.verify(token, JWT_SECRET);
    const farmerEmail = farmer.email;
    const data = await Farmer.findOne({ email: farmerEmail });
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", data: error });
  }
});

//done by admin
//http://localhost:8070/farmer/
router.route("/").get((req, res) => {
  Farmer.find()
    .then((farmers) => {
      res.json(farmers);
    })
    .catch((error) => {
      console.error("Error getting farmers:", error);
      res.status(500).json({ error: "Server error. Failed to get farmers." });
    });
});

//done by farmer
//http://localhost:8070/farmer/update/id
router.route("/update/:id").put(async (req, res) => {
  try {
    const farmerID = req.params.id;
    const { userRole, fname, lname, email, district, password } = req.body;

    const updateFarmer = {
      userRole,
      fname,
      lname,
      email,
      district,
      password,
    };

    await Farmer.findByIdAndUpdate(farmerID, updateFarmer);
    res.status(200).send({ status: "Farmer updated" });
  } catch (error) {
    console.error("Error updating farmer:", error);
    res.status(500).json({ status: "Error with updating data" });
  }
});

//done by either farmer or admin
//http://localhost:8070/farmer/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  try {
    const farmerID = req.params.id;
    await Farmer.findByIdAndDelete(farmerID);
    res.status(200).send({ status: "Farmer deleted" });
  } catch (error) {
    console.error("Error deleting farmer:", error);
    res.status(500).json({ status: "Error with deleting data" });
  }
});

//done by admin
//http://localhost:8070/farmer/get/id
router.route("/get/:id").get(async (req, res) => {
  try {
    const farmerID = req.params.id;
    const farmer = await Farmer.findById(farmerID);
    res.status(200).send({ status: "User fetched", farmer });
  } catch (error) {
    console.error("Error fetching farmer:", error);
    res.status(500).json({ status: "Error with fetching data" });
  }
});

module.exports = router;
