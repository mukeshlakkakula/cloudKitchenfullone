const express = require("express");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["https://cloud-kitchenfullone-2v9s.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true, // if your request involves cookies or authentication
  })
);

const mongoDB = require("./db");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://cloud-kitchenfullone-2v9s.vercel.app");
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

app.listen(5000, () => {
  console.log("port is listening at localhost:5000");
});
