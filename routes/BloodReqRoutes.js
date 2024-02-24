const express = require("express");
const {
  getAllRequests,
  createBloodRequests,
} = require("../controllers/bloodRequest");
const router = express.Router();

router.get("/", getAllRequests);
router.post("/new-request", createBloodRequests);

module.exports = router;
