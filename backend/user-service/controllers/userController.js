const { getAllUsers, createUser } = require("../services/userService");
const { validateUserData } = require("../helpers/validationHelper");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUserHandler = async (req, res) => {
  try {
    const validation = validateUserData(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.statusCode === 409) {
      return res.status(409).json({ message: err.message });
    }
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  createUser: createUserHandler,
};
