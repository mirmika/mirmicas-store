import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/orders`);
        if (!res.ok) {
          throw new Error("Failed to fetch orders.");
        }
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="orders-page"><p>Loading orders...</p></div>;
  }

  if (error) {
    return <div className="orders-page"><p className="error-text">Error: {error}</p></div>;
  }

  return (
    <div className="orders-page">
      <h2>Customer Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-item" key={order._id || order.id}>
              <h4>Order #{order._id?.slice(-6) || order.id}</h4>
              <p><strong>Customer:</strong> {order.customerName}</p>
              <p><strong>Total:</strong> ${order.total?.toFixed(2) || "N/A"}</p>
              <p><strong>Status:</strong> {order.status || "Pending"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
