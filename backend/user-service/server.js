require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ User service MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err.message));

// ✅ Mount router at root (just like product-service)
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 User service running on http://0.0.0.0:${PORT}`);
});
