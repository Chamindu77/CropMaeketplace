const router = require("express").Router();
const Seller = require("../model/Seller");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "78rfrbrefhadnbfrf6y9u0jjpm'[khuuv8f93fuqwhisbedfv8w2bdeb";

// Seller registration route
// http://localhost:8070/seller/register
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

      const oldSeller = await Seller.findOne({ primaryKey });
      if (oldSeller) {
        return res.status(400).json({ error: "This Seller already exists!" });
      }

      const newSeller = new Seller({
        userRole,
        fname,
        lname,
        email,
        district,
        password: encryptedPassword,
        primaryKey,
      });

      await newSeller.save();

      res.status(201).json({
        message: "New seller added successfully!",
        data: {
          userRole: newSeller.userRole,
          fname: newSeller.fname,
          lname: newSeller.lname,
          email: newSeller.email,
          district: newSeller.district,
          password: newSeller.password,
        },
      });
    } catch (error) {
      console.error("Error registering seller:", error);
      res.status(500).json({
        error: "Server error. Failed to register seller.",
      });
    }
  }
);

// Login route for a seller
// http://localhost:8070/seller/login
router.post("/login", async (req, res) => {
  try {
    const { email, password, userRole } = req.body;
    const primaryKey = email + userRole;
    const oldSeller = await Seller.findOne({ primaryKey });

    if (!oldSeller) {
      return res.status(400).json({ error: "This user has not been registered!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, oldSeller.password);
    if (isPasswordMatch) {
      const token = jwt.sign({ email: oldSeller.email }, JWT_SECRET);
      return res.status(200).json({ status: "ok", data: token });
    } else {
      return res.status(401).json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: "An error occurred during login" });
  }
});

// Route to fetch seller data
// http://localhost:8070/seller/userdata
router.post("/userdata", async (req, res) => {
  const { token } = req.body;

  try {
    const seller = jwt.verify(token, JWT_SECRET);
    const sellerEmail = seller.email;
    const data = await Seller.findOne({ email: sellerEmail });
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", data: error });
  }
});


//done by admin
//http://localhost:8070/seller/
router.route("/").get((req, res) => {
  Seller.find()
    .then((sellers) => {
      res.json(sellers);
    })
    .catch((error) => {
      console.log(error);
    });
});

//done by seller
//http://localhost:8070/seller/update/id
router.route("/update/:id").put(async (req, res) => {
  let sellerID = req.params.id;
  const { userRole, fname, lname, email, district, password } = req.body;

  const updateSeller = {
    userRole,
    fname,
    lname,
    email,
    district,
    password,
  };

  await Seller.findByIdAndUpdate(sellerID, updateSeller)
    .then(() => {
      res.status(200).send({ status: "seller updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by either seller or admin
//http://localhost:8070/seller/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  let sellerID = req.params.id;

  await Seller.findByIdAndDelete(sellerID)
    .then(() => {
      res.status(200).send({ status: "seller deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//done by admin
//http://localhost:8070/seller/get/id
router.route("/get/:id").get(async (req, res) => {
  let sellerID = req.params.id;
  await Seller.findById(sellerID)
    .then((seller) => {
      res.status(200).send({ status: "user fetched", seller });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

module.exports = router;
