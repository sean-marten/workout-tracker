require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .catch((e) => console.log(e));

mongoose.set("debug", true);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
