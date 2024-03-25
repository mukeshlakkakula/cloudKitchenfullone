const express = require("express");

const router = express.Router();

router.post("/fooditems", (req, res) => {
  try {
    res.send({
      fooditems: global.food_items,
      foodCategory: global.food_category,
    });
  } catch (error) {
    res.send("server error");
  }
});

module.exports = router;
