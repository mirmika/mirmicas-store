const { getAllOrders, createOrder } = require('../services/orderService');

const getOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrderHandler = async (req, res) => {
  try {
    const newOrder = await createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getOrders,
  createOrder: createOrderHandler,
};
