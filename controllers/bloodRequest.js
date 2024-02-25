const express = require("express");
const BloodReq = require("../models/bloodRequestSchema");

const getAllRequests = async (req, res) => {
  let requests = await BloodReq.find().populate("hospital");
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

const changeStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let bloodRequestExist = await BloodReq.findById({ _id: id });
    if (bloodRequestExist) {
      bloodRequestExist.status = "Donated";
      await bloodRequestExist.save();

      return res
        .status(200)
        .json({ error: false, message: "Blood donated", bloodRequestExist });
    } else {
      return res.status(404).json({ error: true, message: "Data not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Something went wrong", error });
  }
};

const viewRequest = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id)
    let request = await BloodReq.findById({ _id: id }).populate("hospital");
    console.log(request)
    if (request) {
      return res
        .status(200)
        .json({ error: false, message: "Request Found", request });
    } else {
      return res
        .status(404)
        .json({ error: true, message: "Request Not Found" });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ error: true, message: "Something went wrong", error });
  }
};

module.exports = {
  getAllRequests,
  createBloodRequests,
  changeStatus,
  viewRequest,
};
