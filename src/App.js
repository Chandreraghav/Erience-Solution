import React, { useEffect, useState } from "react";
import axios from "axios";
import CityForm from "./CityForm";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <CityForm fetchCities={fetchUsers} />
      <UserForm fetchUsers={fetchUsers} />
      <UserTable fetchUsers={fetchUsers} users={users} />
    </div>
  );
};

export default App;
