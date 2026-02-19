import express from "express";

const router = express.Router();

router.get("/fooditems", (req, res) => {
  try {
    if (!global.food_items || !global.food_category) {
      return res.status(500).json({ error: "Data not loaded yet" });
    }
    res.json({
      fooditems: global.food_items,
      foodCategory: global.food_category,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

export default router;
