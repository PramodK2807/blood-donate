const express = require("express");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { hashPassword, verifyPassword } = require("../helpers/password");

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

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
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
    const verifyPass = await verifyPassword(password, existingUser?.password);

    if (!verifyPass) {
      return res.status(400).json({ error: true, message: "Invalid data" });
    } else {
      let user = {
        _id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        age: existingUser.age,
      };
      let token = await jwt.sign(user, "GYUSYUVGUHLBHKUIG^*FGOSGF^TGYUVS", {
        expiresIn: "7d",
      });

      return res.status(200).json({
        error: false,
        message: "Logged in successfully",
        user: user,
        token,
      });
    }
  }
};

module.exports = { registerUser, loginUser };
