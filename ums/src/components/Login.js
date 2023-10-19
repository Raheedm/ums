// import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the login data to the backend (PHP script) for verification
    fetch('backend/login.php', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          
          if (email === 'principal@chowgules.ac.in') {
           
            navigate('/principal');
          } else if(email==='admin@chowgules.ac.in'){
           
            navigate('/adminhead')
          }
          else if (email==='recruitment@chowgules.ac.in'){
            navigate('/hr')
          }


        } else {
         
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action='http://localhost:8000/Server.php'
      onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
