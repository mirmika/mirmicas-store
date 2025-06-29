import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="users-page"><p>Loading users...</p></div>;
  }

  if (error) {
    return <div className="users-page"><p className="error-text">Error: {error}</p></div>;
  }

  return (
    <div className="users-page">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="users-list">
          {users.map((user) => (
            <li key={user._id || user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
