import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resetpassword.css';  
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="reset-body">
      <div className="reset-wrapper">
        <div className="reset-card">
          <h2 className="reset-heading">Tracking</h2>
          <form onSubmit={handleReset} className="reset-form" noValidate>

            {/* Password input */}
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="reset-input"
                autoComplete="off"
                spellCheck="false"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#aaa',
                  fontSize: '18px'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm password input */}
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="reset-input"
                autoComplete="off"
                spellCheck="false"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#aaa',
                  fontSize: '18px'
                }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="reset-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
