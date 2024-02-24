const express = require("express");
const User = require("../models/userSchema");

const registerUser = async (req, res) => {
  try {
    const { email, fullName, age, password } = req.body;

    if (!fullName || !email || !age || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: true, message: "User already registered" });
    }

    const newUser = new User({
      fullName,
      email,
      password,
      age,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ error: false, message: "User registered successfully", newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ error: true, message: "User not found" });
  } else {
    // console.log(existingUser)
    if (existingUser.password !== password) {
      return res.status(400).json({ error: true, message: "Invalid data" });
    } else {
      return res.status(200).json({
        error: false,
        message: "Logged in successfully",
        user: existingUser,
      });
    }
  }
};

module.exports = { registerUser, loginUser };
