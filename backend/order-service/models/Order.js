const mongoose = require("mongoose");

// Reusable sub-schema for shipping address
const shippingAddressSchema = new mongoose.Schema({
  street: { type: String, trim: true, maxlength: 100 },
  city: { type: String, trim: true, maxlength: 50 },
  postalCode: { type: String, trim: true, maxlength: 20 },
  country: { type: String, trim: true, maxlength: 50 }
}, { _id: false });

// Main Order schema
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"]
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Product ID is required"]
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"]
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      min: [0, "Total price cannot be negative"]
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending"
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid", "refunded"],
      default: "unpaid"
    },
    shippingAddress: shippingAddressSchema,
    trackingNumber: {
      type: String,
      trim: true,
      default: ""
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);
