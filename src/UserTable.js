import React, { useEffect, useState } from "react";
import axios from "axios";


const UserTable = ({ fetchUsers, users }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h3>User List</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Mobile</th>
            <th>Profile Picture</th>
            <th>Edit →</th>
            <th>Delete ←</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.salary}</td>
              <td>{user.mobile}</td>
              <td>
                <img src={user.profilePic} alt="Profile" width="50" height="50" />
              </td>
              <td><button>Edit</button></td>
              <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
