const express = require("express");
const {
  getAllRequests,
  createBloodRequests,
  changeStatus,
  viewRequest,
} = require("../controllers/bloodRequest");
const router = express.Router();

router.get("/", getAllRequests);
router.post("/new-request", createBloodRequests);
router.get("/change-status/:id", changeStatus);
router.get("/view/:id", viewRequest);

module.exports = router;
