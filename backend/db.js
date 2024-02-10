// const mongoose = require('mongoose');

// const mongoURI="mongodb://localhost:27017/ilognote"

// const connectToMongo =()=>{
//     mongoose.connect (mongoURI,()=>{
//         console.log("Connected to MongoDb");
//     })
// }

// module.exports = connectToMongo;

const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/ilognote";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
