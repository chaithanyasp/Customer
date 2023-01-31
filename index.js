// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Customerdetail = require("./Schema/Data");

// require("./Schema/Config");

// app.use("/api/",Customerdetail)

// app.listen(8000,() => 
// console.log(`app listen on 8000`));

// module.export = app;

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const connectDB = require("./Schema/Config");



// routes
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");
// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("server is active"));

// use routes
app.use("/customer", customer);
app.use("/product", product);
app.use("/orders", order);

// setting up port

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
