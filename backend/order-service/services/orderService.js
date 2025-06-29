const Order = require('../models/Order');

const getAllOrders = async () => {
  // Only return raw ObjectIds; detailed info should be fetched by the frontend or an API Gateway
  return await Order.find(); 
};

const createOrder = async ({ userId, productId, quantity, shippingAddress, notes }) => {
  if (!userId || !productId || !quantity) {
    throw new Error('Missing required fields: userId, productId, quantity');
  }

  // ⚠️ If needed, you can later call product-service to fetch real price
  const totalPrice = quantity * 10; // placeholder price

  const newOrder = new Order({
    userId,
    productId,
    quantity,
    totalPrice,
    shippingAddress,
    notes,
    paymentStatus: 'unpaid',
  });

  await newOrder.save();
  return newOrder;
};

module.exports = {
  getAllOrders,
  createOrder,
};
