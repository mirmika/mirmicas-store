const express = require("express");
const router = express.Router();
const { getOrders, createOrder } = require("../controllers/orderController");

// GET /
router.get("/", getOrders);

// POST /
router.post("/", createOrder);

module.exports = router;