import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './forget_password.css';  // Separate CSS file for forget

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgot = (e) => {
    e.preventDefault();
    // You can trigger email API here
    navigate('/resetpassword');
  };

  return (
    <div className="forget-body">
      <div className="forget-wrapper">
        <div className="forget-card">
          <h2 className="forget-heading">Tracking</h2>
          <form onSubmit={handleForgot} className="forget-form" noValidate>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="forget-input"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="forget-button">Send Reset Link</button>
            <Link to="/login" className="forget-link">
              ← Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
