import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ fetchUsers }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [mobile, setMobile] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cities").then((res) => setCities(res.data));
  }, []);

  const handleFileUpload = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !city || !salary || !mobile || !profilePic) return;

    const reader = new FileReader();
    reader.onload = async () => {
      await axios.post("http://localhost:5000/users", {
        name,
        city,
        salary,
        mobile,
        profilePic: reader.result,
      });
      setName("");
      setCity("");
      setSalary("");
      setMobile("");
      setProfilePic(null);
      fetchUsers();
    };
    reader.readAsDataURL(profilePic);
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <input type="file" accept="image/png, image/jpeg" onChange={handleFileUpload} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
