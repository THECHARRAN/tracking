import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './changepassword.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="changepassword-body">
      <div className="changepassword-wrapper">
        <div className="changepassword-card">
          <h2 className="changepassword-heading">Change Password</h2>
          <form onSubmit={handleChange} className="changepassword-form" noValidate>

            {/* Old Password */}
            <div style={{ position: 'relative' }}>
              <input
                type={showOldPassword ? 'text' : 'password'}
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="changepassword-input"
                autoComplete="off"
                spellCheck="false"
              />
              <span 
                onClick={() => setShowOldPassword(!showOldPassword)}
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
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* New Password */}
            <div style={{ position: 'relative' }}>
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="changepassword-input"
                autoComplete="off"
                spellCheck="false"
              />
              <span 
                onClick={() => setShowNewPassword(!showNewPassword)}
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
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="changepassword-input"
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

            <button type="submit" className="changepassword-button">Submit</button>
            <Link to="/login" className="changepassword-link">← Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;     
