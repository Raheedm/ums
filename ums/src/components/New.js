import React, { useState } from 'react';
import axios from 'axios';

const New = () => {
  const [formData, setFormData] = useState({
    fname: '',
    midname: '',
    lname: '',
    email: '',
    pswd: '',
    phno: '',
    pincode: '',
    city: '',
    taluka: '',
    state: '',
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'pincode') {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${value}`);
        if (response.data.length > 0) {
          const firstResult = response.data[0];
          setFormData({
            ...formData,
            city: firstResult.display_name.split(',')[0].trim(),
            taluka: firstResult.display_name.split(',')[0].trim(), 
            state: firstResult.display_name.split(',')[4].trim(),
          });
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
        </div>
        <div>
          <label>Middle Name:</label>
          <input type="text" name="midname" value={formData.midname} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="pswd" value={formData.pswd} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phno" value={formData.phno} onChange={handleChange} required />
        </div>
        <div>
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} readOnly />
        </div>
        <div>
          <label>Taluka:</label>
          <input type="text" name="taluka" value={formData.taluka} readOnly />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} readOnly />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default New;
