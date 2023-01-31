// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const inventory = new Schema(
//   {
//     Inventory_id:{type: String},
//     Inventory_Type:{type: String},
//     Item_name:{ type: String, unique: true },
//     Available_quantity: { type: String}
    
//   },
//   { timestamps: true }
// );

// const InventoryModel = mongoose.model("Inventory", inventory);
// module.exports = InventoryModel;

const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        unique: true,
        required: true
    },
    customer_name: String,
    email: { type: String, unique: true },
    balance: String
});

const Customer = mongoose.model("Customers", CustomerSchema);

module.exports = Customer;