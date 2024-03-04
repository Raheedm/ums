import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentAdmission = () => {
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

  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const fetchLocationData = async () => {
    if (formData.pincode) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${formData.pincode}`);
        if (response.data && response.data[0].Status === 'Success') {
          const postOffices = response.data[0].PostOffice;
          setFormData({
            ...formData,
            city: '',
            taluka: postOffices[0].Block,
            state: postOffices[0].State,
          });
          const cityNames = postOffices.map((postOffice) => postOffice.Name);
          setCities(cityNames);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, [formData.pincode]);

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
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
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

export default StudentAdmission;
