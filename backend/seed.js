const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define the models
const User = require("./models/User");
const Item = require("./models/Item");
const Comment = require("./models/Comment");

// Clear the collections
const clearDB = async () => {
  await User.deleteMany({});
  await Item.deleteMany({});
  await Comment.deleteMany({});
};

// Insert sample data
const seedDB = async () => {
  // Create admin user
  const adminUser = new User({
    name: "Admin User",
    email: "admin@example.com",
    password: "123456",
    isAdmin: true,
  });

  await adminUser.save();

  // Create regular user
  const regularUser = new User({
    name: "Regular User",
    email: "user@example.com",
    password: "123456",
    isAdmin: false,
  });

  await regularUser.save();

  // Create items
  const items = [
    {
      name: "Item One",
      description: "This is the description for Item One.",
      price: 100,
      user: adminUser._id, // Adding user field
    },
    {
      name: "Item Two",
      description: "This is the description for Item Two.",
      price: 200,
      user: adminUser._id, // Adding user field
    },
    {
      name: "Item Three",
      description: "This is the description for Item Three.",
      price: 300,
      user: adminUser._id, // Adding user field
    },
  ];

  const createdItems = await Item.insertMany(items);

  // Create comments for the first item
  const comments = [
    {
      content: "Great item!",
      item: createdItems[0]._id,
      user: regularUser._id,
    },
    {
      content: "Very useful.",
      item: createdItems[0]._id,
      user: regularUser._id,
    },
  ];

  await Comment.insertMany(comments);

  console.log("Sample data inserted");
  process.exit();
};

// Clear and seed the database
clearDB()
  .then(seedDB)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
