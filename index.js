const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const bloodReqRoutes = require("./routes/BloodReqRoutes");

const app = express();
const PORT = process.env.PORT || 2100;

const dotenv = require("dotenv");
dotenv.config();

require("./db/config");

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/blood", bloodReqRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
