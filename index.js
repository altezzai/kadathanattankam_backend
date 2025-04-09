const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models"); // Sequelize models
const newsRoutes = require("./routes/newsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const prEventsRoutes = require("./routes/prEventsRoutes");
const quotationsRoutes = require("./routes/quotationsRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("dotenv").config();
const initUploadDir = require("./utils/initUploadDir");

const app = express();
app.use(cors());
app.use(bodyParser.json());
initUploadDir();

// Register Routes
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/pr-events", prEventsRoutes);
app.use("/api/v1/quotations", quotationsRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/uploads", express.static("uploads"));

// Sync Database
db.sequelize
  .sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
