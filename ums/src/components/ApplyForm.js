import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ApplyForm = () => {
  const { courseValue } = useParams();
  const { state } = useLocation();
  const courses = state.courses;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    hearAboutUs: '',
    consent: false,
  });

  const [cities, setCities] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setFormData({ ...formData, pincode });
    if (pincode) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        if (response.data && response.data[0].Status === 'Success') {
          const postOffices = response.data[0].PostOffice;
          setFormData({
            ...formData,
            city: '',
            taluka: postOffices[0].Block,
            state: postOffices[0].State,
            country: postOffices[0].Country,
          });
          const cityNames = postOffices.map((postOffice) => postOffice.Name);
          setCities(cityNames);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You can use formData to send the details to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Apply for
        <Select
          value={{ label: courseValue, value: courseValue }}
          isClearable
          options={courses.map((course) => ({
            label: course.label,
            value: course.value,
          }))}
          onChange={(newValue) => navigate(`/apply/${newValue.value}`)}
        />
      </h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handlePincodeChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>How did you hear about us:</label>
        <input
          type="text"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            required
          />
          I authorize Parvatibai Chowgule College of Arts and Science and its associates
          to contact me with updates & notifications via email, SMS, WhatsApp, and voice call
        </label>
      </div>
      <button type="submit">Apply Now</button>
    </form>
  );
};

export default ApplyForm;
