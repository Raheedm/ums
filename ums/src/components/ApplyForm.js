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
    <div className="container mx-auto p-6">  
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"> 
        <h2 className="text-2xl font-bold mb-6">
          Apply for
          <Select
            value={{ label: courseValue, value: courseValue }}
            isClearable
            options={courses.map((course) => ({
              label: course.label,
              value: course.value,
            }))}
            onChange={(newValue) => navigate(`/apply/${newValue.value}`)}
            className="w-full text-gray-700" 
          />
        </h2>

        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="pincode">
            Pincode:
          </label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handlePincodeChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200" 
          />
        </div>

        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
            City:
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
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

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
            State:
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2" htmlFor="country">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="hearAboutUs">
            How did you hear about us:
          </label>
          <input
            type="text"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              required
              className="mr-2"
            />
            I authorize Parvatibai Chowgule College of Arts and Science and its associates
            to contact me with updates & notifications via email, SMS, WhatsApp, and voice call
          </label>
        </div>

        <div className="mt-6"> 
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring focus:ring-indigo-200">
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
