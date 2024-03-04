import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Program.css'; // Import the external CSS file

const courses = [
  { value: 'Course 1', label: 'Digital Marketing with Content Creation' },
  { value: 'Course 2', label: 'Photo Production' },
  { value: 'CCE-CNS', label: 'Certified Cyber Engineer, Computer & Network Security (CCE-CNS)' },
  { value: 'Course 4', label: 'Certified Cybersecurity Technician (CCT)' },
  { value: 'Course 5', label: 'M.A.' },
  { value: 'Course 6', label: 'M.Sc.' },
  { value: 'Course 7', label: 'Geo-Informatics(PGDGIS)' },
  { value: 'Course 8', label: 'Clinical Genetics & Medical Lab Techniques (PGDGMLT)' },
  { value: 'Course 9', label: 'Diploma in Aviation , Hospitality & Customer Service' },
  { value: 'Course 10', label: 'Certificate in Rooms Division' },
  { value: 'Course 11', label: 'Dual Certificate in Food & Beverage Service & Bartending' },
  { value: 'Course 12', label: 'Multimedia course' },
  { value: 'Course 13', label: 'Photography' },
  { value: 'Course 14', label: 'Drawing and Painting' },
  { value: 'Course 15', label: 'Graphic Design' },
  { value: 'Course 16', label: 'Pro Music Production Certificate (The True School of Music)' },
  { value: 'Course 17', label: 'Digital Painting' },
  { value: 'Course 18', label: 'Graphic Design-UI/UX' },
  { value: 'Course 19', label: 'Forensic Photography' },
  { value: 'Course 20', label: 'Architectural Planning using AUTO CAD' },
  { value: 'Course 21', label: 'Architectural VR' },
  { value: 'Course 22', label: '3D Architectural Animation' },
].sort((a, b) => a.label.localeCompare(b.label));

function Program() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleInputChange = (newValue) => {
    setSelectedCourse(newValue);
    setSearchQuery(newValue ? newValue.value : '');
  
    // Navigate to the ApplyForm when a course is selected
    if (newValue) {
      navigate(`/apply/${newValue.value}`, { state: { courses } });
    }
  };

  const filterCourses = (inputValue) => {
    return courses.filter((course) =>
      course.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <div>
      <div className="select-container">
        <Select
          value={selectedCourse}
          isClearable
          placeholder="Select or Search for a Course"
          onChange={handleInputChange}
          onInputChange={(inputValue) => setSearchQuery(inputValue)}
          options={filterCourses(searchQuery)}
        />
      </div>
      <div>
        <h2>Parvatibai Chowgule College</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Program;
