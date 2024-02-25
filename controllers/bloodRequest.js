const express = require("express");
const BloodReq = require("../models/bloodRequestSchema");

const getAllRequests = async (req, res) => {
  let requests = await BloodReq.find();
  return res
    .status(200)
    .json({ error: false, message: "All Requests", requests });
};

const createBloodRequests = async (req, res) => {
  try {
    let bodyAge = parseInt(req.body.age, 10);
    let number = parseInt(req.body.contact, 10);
    let { name, bloodGroup, gender, hospital } = req.body;

    if (!name || !bloodGroup || !bodyAge || !gender) {
      return res
        .status(400)
        .json({ error: true, message: "All fields required" });
    } else {
      let newReq = new BloodReq({
        name,
        bloodGroup,
        age: bodyAge,
        contact: number,
        gender,
        hospital,
      });
      await newReq.save();
      return res
        .status(201)
        .json({ error: false, message: "New request created", newReq });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Error occurred", error });
  }
};

module.exports = { getAllRequests, createBloodRequests };
