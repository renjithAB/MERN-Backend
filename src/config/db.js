const mongoose = require("mongoose");

const { MONGO_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log("connection failed");
      console.log(error);
      process.exit(1);
    });
};
