const validateUserData = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return { valid: false, message: "Name, email and password are required." };
  }

  const emailRegex = /.+\@.+\..+/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Invalid email address." };
  }

  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters." };
  }

  return { valid: true };
};

module.exports = {
  validateUserData,
};
