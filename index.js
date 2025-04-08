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

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register Routes
app.use("/news", newsRoutes);
app.use("/events", eventsRoutes);
app.use("/pr-events", prEventsRoutes);
app.use("/quotations", quotationsRoutes);
app.use("/gallery", galleryRoutes);
app.use("/auth", authRoutes);

// Sync Database
db.sequelize
  .sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
