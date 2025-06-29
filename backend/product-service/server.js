require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Product service MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err.message));

// ✅ Serve uploaded images
app.use('/', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use('/', productRoutes);

// ✅ Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Product service running at http://0.0.0.0:${PORT}`);
});
