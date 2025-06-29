const validateProductData = ({ name, price, image }) => {
  if (!name || !price || !image) {
    return { valid: false, message: 'Missing required fields.' };
  }
  if (price < 0) {
    return { valid: false, message: 'Price must be positive.' };
  }
  return { valid: true };
};

module.exports = {
  validateProductData,
};
