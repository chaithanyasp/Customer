// const mongoose = require("mongoose");
// let url = "mongodb://localhost:27017/api_web_tech_assignment";
// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to the database ");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to the database. n${err}`);
//   });

const mongoose = require("mongoose");

const db = 'mongodb://localhost:27017/Customers_Web_Tech';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;