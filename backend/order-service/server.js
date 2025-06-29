// order-service/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const orderRoutes = require("./routes/orders");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Order service connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err.message));

// ✅ Mount order routes at root
app.use('/', orderRoutes);

// ✅ Optional: Serve frontend if built
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  });
}

app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Order service running on http://0.0.0.0:${PORT}`));