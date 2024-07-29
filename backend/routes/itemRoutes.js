const express = require("express");
const {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, admin, createItem).get(getItems);

router
  .route("/:id")
  .get(getItemById)
  .put(protect, admin, updateItem)
  .delete(protect, admin, deleteItem);

module.exports = router;
