import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Available users</h1>
        <div className="users">
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to="/chat" className="link-secondary link-underline-light">{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Users;
