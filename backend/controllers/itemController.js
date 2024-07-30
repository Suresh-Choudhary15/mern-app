const asyncHandler = require("express-async-handler");
const Item = require("../models/Item");

// @desc    Fetch all items
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

// @desc    Fetch single item
// @route   GET /api/items/:id
// @access  Public
const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});

// @desc    Create an item
// @route   POST /api/items
// @access  Private/Admin
const createItem = asyncHandler(async (req, res) => {
  const { name, description, price } = req.body;

  const item = new Item({
    name,
    description,
    price,
    user: req.user._id,
  });

  const createdItem = await item.save();
  res.status(201).json(createdItem);
});

// @desc    Update an item
// @route   PUT /api/items/:id
// @access  Private/Admin
const updateItem = asyncHandler(async (req, res) => {
  const { name, description, price } = req.body;

  const item = await Item.findById(req.params.id);

  if (item) {
    item.name = name || item.name;
    item.description = description || item.description;
    item.price = price || item.price;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});

// @desc    Delete an item
// @route   DELETE /api/items/:id
// @access  Private/Admin
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    await item.remove();
    res.json({ message: "Item removed" });
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
