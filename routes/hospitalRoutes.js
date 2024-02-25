const express = require("express");
const { addHospitals, getAllHospitals } = require("../controllers/hospital");

const router = express.Router();

router.post("/add", addHospitals);
router.get("/", getAllHospitals);

module.exports = router;
