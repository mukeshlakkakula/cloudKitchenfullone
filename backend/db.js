const mongoose = require("mongoose");

const mongooseUrl =
  "mongodb+srv://Mukesh:Mukesh%40950@cluster0.phwub5z.mongodb.net/cloudFood?retryWrites=true&w=majority&appName=Cluster0";

// Mukesh@950,cloudFood
const mongoDB = async () => {
  try {
    await mongoose.connect(mongooseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const fetched_data1 = await mongoose.connection.db.collection("foodItems");
    let dataOfFoodItems = await fetched_data1.find({}).toArray();
    const fetched_data2 = await mongoose.connection.db.collection(
      "foodCategory"
    );

    global.food_items = dataOfFoodItems;
    let dataOfFoodCategory = await fetched_data2.find({}).toArray();
    global.food_category = dataOfFoodCategory;
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB();
