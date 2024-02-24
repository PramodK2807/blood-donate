const mongoose = require("mongoose");

const bloodRequestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    default: "",
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  // hospital: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "hospital",
  // },
});

module.exports = mongoose.model("blood request", bloodRequestSchema);
