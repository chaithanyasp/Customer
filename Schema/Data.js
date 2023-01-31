const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Inventory_id: {
        type: String,
        unique: true,
        required: true
    },
    Inventory_type: String,
    Item_name:{ type: String, unique: true },
    Available_quantity: String
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;