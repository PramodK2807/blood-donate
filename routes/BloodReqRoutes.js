const express = require("express");
const {
  getAllRequests,
  createBloodRequests,
  changeStatus,
} = require("../controllers/bloodRequest");
const router = express.Router();

router.get("/", getAllRequests);
router.post("/new-request", createBloodRequests);
router.get("/change-status/:id", changeStatus);

module.exports = router;
