const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("./models/db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/students", require("./routes/students"));

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server running on port ${port}...`));
