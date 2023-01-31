const express = require("express");

const router = express.Router();

const {
    createOrder,
    getOrder,
    getOrderByID
} = require("../Controller/order");

router.get("/", getOrder);

router.get("/:id", getOrderByID);

router.post("/", createOrder);

module.exports = router;