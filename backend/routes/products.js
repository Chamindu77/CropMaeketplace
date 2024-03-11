const router = require("express").Router();
const Product = require("../model/Product");

//http://localhost:8070/product/add
router.route("/add").post((req, res) => {
  const productName = req.body.productName;
  const productCategory = req.body.productCategory;
  const productImage = req.body.productImage;

  const newProduct = new Product({
    productName,
    productCategory,
    productImage,
  });

  newProduct
    .save()
    .then(() => {
      res.json("Product added succesfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/product/
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/product/vegetable
router.route("/vegetable").get((req, res) => {
  Product.find({ productCategory: "Veg" })
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.log(error);
    });
});

//http://localhost:8070/product/update/id
router.route("/update/:id").put(async (req, res) => {
  let productID = req.params.id;
  const { productName, productCategory, productImage } = req.body;

  const updateProduct = { productName, productCategory, productImage };

  await Product.findByIdAndUpdate(productID, updateProduct)
    .then(() => {
      res.status(200).send({ status: "Product updated" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//http://localhost:8070/product/delete/id
router.route("/delete/:id").delete(async (req, res) => {
  let productID = req.params.id;

  await Product.findByIdAndDelete(productID)
    .then(() => {
      res.status(200).send({ status: "Product deleted" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//http://localhost:8070/student/get/id
router.route("/get/:id").get(async (req, res) => {
  let productID = req.params.id;
  await Product.findById(productID)
    .then((product) => {
      res.status(200).send({ status: "user fetched", product });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ status: "error with ferching student" });
    });
});

// Backend (Express.js)
router.route("/:category").get(async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ productCategory: category });
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error fetching products" });
  }
});

module.exports = router;
