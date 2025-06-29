const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getAllUsers = async () => {
  return await User.find().select("-password"); // Exclude password field
};

const createUser = async ({ name, email, password, address, isAdmin }) => {
  if (!name || !email || !password) {
    throw new Error("Name, email and password are required.");
  }

  const existing = await User.findOne({ email });
  if (existing) {
    const error = new Error("Email already registered.");
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    address,
    isAdmin: isAdmin || false,
  });

  await newUser.save();
  const userObj = newUser.toObject();
  delete userObj.password; // Remove password before returning
  return userObj;
};

module.exports = {
  getAllUsers,
  createUser,
};
