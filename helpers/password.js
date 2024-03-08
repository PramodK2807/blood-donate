const bcrypt = require("bcrypt");

// Function to hash a password
const hashPassword = async (password) => {
  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

const verifyPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error verifying password");
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
