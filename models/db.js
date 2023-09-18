const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_test2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", () => console.log("Error with the database!"));
