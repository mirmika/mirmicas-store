const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    trim: true,
    maxlength: 100
  },
  city: {
    type: String,
    trim: true,
    maxlength: 50
  },
  postalCode: {
    type: String,
    trim: true,
    maxlength: 20
  },
  country: {
    type: String,
    trim: true,
    maxlength: 50
  }
}, { _id: false });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false // ⚠️ Hide password by default in queries
    },
    address: addressSchema,
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
