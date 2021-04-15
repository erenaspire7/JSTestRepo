const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/main");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Use routes
app.use("/api", routes);

module.exports = app;
