require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

console.log("🔁 Proxy targets:");
console.log(`🟢 Product: ${process.env.PRODUCT_SERVICE_URL}`);
console.log(`🟢 Order:   ${process.env.ORDER_SERVICE_URL}`);
console.log(`🟢 User:    ${process.env.USER_SERVICE_URL}`);

app.get('/', (req, res) => {
  res.send('✅ API Gateway is running');
});

// ✅ Product Service
app.use('/api/products', createProxyMiddleware({
  target: process.env.PRODUCT_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api/products': '/' },
  logLevel: 'debug'
}));

// ✅ Order Service
app.use('/api/orders', createProxyMiddleware({
  target: process.env.ORDER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/' },
  logLevel: 'debug'
}));

// ✅ User Service
app.use('/api/users', createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/' },
  logLevel: 'debug'
}));

// ✅ Uploaded images from Product Service
app.use('/uploads', createProxyMiddleware({
  target: process.env.PRODUCT_SERVICE_URL,
  changeOrigin: true,
  logLevel: 'debug'
}));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API Gateway running on http://0.0.0.0:${PORT}`);
});
