const Product = require("../Schema/Data");

//! GET PRODUCT BY ID

exports.getProductByID = (req, res) => {
    // console.log(req.params.productID);
    Product.findOne({ Inventory_id: req.params.productID })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: "No Found", error: err.message
            })
        })
}

//! GET PRODUCT BY PRODUCT TYPE

exports.getByProdType = (req, res) => {
    console.log(req.params.prodType);
    Product.find({ Inventory_type: req.params.prodType })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: "No  Found", error: err.message
            })
        })
}

//! UPDATE PRODUCT QUANTITY

exports.putQuantity = (req, res) => {
    console.log(req.params);
    Product.find({ Item_name: req.params.productName })
        .then(Product.findOneAndUpdate({ Available_quantity: req.params.availableQuantity })
            .then((data) => {
                console.log(data);
                res.status(200).json(data);
            }))
        .catch((err) => {
            res.status(500).json({
                message: "No Product Found", error: err.message
            })
        })
}

// GET ALL PRODUCTS

exports.getProduct = (req, res) => {
    Product.find()
        .then((data) => {
            console.log({ data });
            res.json(data);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "No Product Found", error: err.message })
        );
}

// CREATE NEW PRODUCTS

exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "Product added Successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "Unable to add new product",
                error: err.message,
            })
        );
};