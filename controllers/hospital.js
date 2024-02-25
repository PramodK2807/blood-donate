const express = require("express");
const Hospital = require("../models/hospitalSchema");

const addHospitals = async (req, res) => {
  try {
    let { name, address } = req.body;
    console.log(req.body);
    let hospital = new Hospital({ name, address }); // Creating a new instance
    let newHosp = await hospital.save(); // Saving the instance
    return res
      .status(201)
      .json({ error: false, message: "Hospitals Added", newHosp });
  } catch (error) {
    return res
      .status(500)

      .json({ error: true, message: "Error while adding hospitals" });
  }
};

const getAllHospitals = async (req, res) => {
  try {
    let hospitals = await Hospital.find();
    return res
      .status(200)
      .json({ error: false, message: "All Hospitals", hospitals });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Error while fetching hospitals", error });
  }
};
module.exports = { addHospitals, getAllHospitals };
