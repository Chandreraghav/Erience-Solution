import React, { useState } from "react";
import axios from "axios";

const CityForm = ({ fetchCities }) => {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    await axios.post("http://localhost:5000/cities", { name: city });
    setCity("");
    fetchCities();
  };

  return (
    <div >
      <h3 >Add City</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityForm;
