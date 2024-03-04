import React, { Component } from 'react';
import '../css/Register.css'; // Import your CSS file

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      midname: '',
      email: '',
      pswd: '',
      phno: '',
      city: '',
      state: '',
      pincode: '',
      aadhar_no: '',
      guar_name: '',
      guar_phno: '',
      guar_email: '',
      guar_relation: '',
      guar_income: '',
      caste: '',
      religion: '',
      blood_grp: '',
      nationality: '',
      dob: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend (PHP script) for insertion
    fetch('your_php_insert_script.php', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the PHP script, e.g., show a success message
        console.log(data);
        // Reset the form
        this.setState({
          fname: '',
          lname: '',
          midname: '',
          email: '',
          pswd: '',
          phno: '',
          city: '',
          state: '',
          pincode: '',
          aadhar_no: '',
          guar_name: '',
          guar_phno: '',
          guar_email: '',
          guar_relation: '',
          guar_income: '',
          caste: '',
          religion: '',
          blood_grp: '',
          nationality: '',
          dob: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className="register-container">
        <h2>Student Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lname"
              value={this.state.lname}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Middle Name:</label>
            <input
              type="text"
              name="midname"
              value={this.state.midname}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="pswd"
              value={this.state.pswd}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phno"
              value={this.state.phno}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={this.state.pincode}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Aadhar Number:</label>
            <input
              type="text"
              name="aadhar_no"
              value={this.state.aadhar_no}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Guardian Name:</label>
            <input
              type="text"
              name="guar_name"
              value={this.state.guar_name}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Guardian Phone Number:</label>
            <input
              type="text"
              name="guar_phno"
              value={this.state.guar_phno}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Guardian Email:</label>
            <input
              type="email"
              name="guar_email"
              value={this.state.guar_email}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Guardian Relation:</label>
            <input
              type="text"
              name="guar_relation"
              value={this.state.guar_relation}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Guardian Income:</label>
            <input
              type="text"
              name="guar_income"
              value={this.state.guar_income}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Caste:</label>
            <input
              type="text"
              name="caste"
              value={this.state.caste}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Religion:</label>
            <input
              type="text"
              name="religion"
              value={this.state.religion}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Blood Group:</label>
            <input
              type="text"
              name="blood_grp"
              value={this.state.blood_grp}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={this.state.nationality}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
