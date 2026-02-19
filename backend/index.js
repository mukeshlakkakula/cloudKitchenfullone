import express from "express";
import cors from "cors";
import mongoDB from "./db.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(express.json());

import createUserRouter from "./Routes/CreateUser.js";
import foodItemsRouter from "./Routes/FoodItems.js";
import orderDataRouter from "./Routes/OrderData.js";

app.use("/api", createUserRouter);
app.use("/api", foodItemsRouter);
app.use("/api", orderDataRouter);

app.listen(PORT, () => {
  console.log(`port is listening at localhost:${PORT}`);
});
