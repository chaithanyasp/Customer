const express = require("express");

const router = express.Router();

const {
    getCustomer,
    createCustomer,
    getCustomerByID
} = require("../Controller/customer");

router.get("/", getCustomer);

router.get("/:customerID", getCustomerByID);

router.post("/", createCustomer);

module.exports = router;
