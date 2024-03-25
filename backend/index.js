const express = require("express");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(
  cors()
);

const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/FoodItems"));
app.use("/api", require("./Routes/OrderData"));

app.listen(PORT, () => {
  console.log("port is listening at localhost:5000");
});
