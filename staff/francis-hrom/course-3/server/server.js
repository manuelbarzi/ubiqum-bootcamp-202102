const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Database connection
const db = require("./keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

// Middleware
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/cities", require("./routes/cities"));

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
