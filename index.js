const express = require("express");
const app = require("./app");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log(`server started and listening on port ${port}`);
});
