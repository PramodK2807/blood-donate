const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      required: true,
      lowercase: true,
      type: String,
      trim: true,
    },
    email: {
      required: true,
      lowercase: true,
      type: String,
      unique: true,
      trim: true,
    },
    age: {
      required: true,
      type: String,
      trim: true,
    },
    password: {
      required: true,
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
