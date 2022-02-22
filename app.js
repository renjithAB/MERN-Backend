require("dotenv").config();
require("./src/config/db").connect();
const ApiError = require("./src/utils/ApiError");
const httpStatus = require("http-status");
const { errorConverter, errorHandler } = require("./src/middleware/error");

const cors = require("cors");
const express = require("express");
const routes = require("./src/routes");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.use("/", routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
