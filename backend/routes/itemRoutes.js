const express = require("express");
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const { protect, admin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(getItems).post(protect, admin, createItem);
router
  .route("/:id")
  .get(getItemById)
  .put(protect, admin, updateItem)
  .delete(protect, admin, deleteItem);

module.exports = router;
