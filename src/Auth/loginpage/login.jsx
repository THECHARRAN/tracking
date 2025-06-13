import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';
import './login.css';  // Login CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { role } = useParams();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-body">
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-heading">{role ? `${role} Portal` : "Tracking Portal"}</h2>
          <p className="login-subtext">Track your shipments securely. Please login to continue.</p>

          <form onSubmit={handleLogin} className="login-form" noValidate>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              autoComplete="off"
              spellCheck="false"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              autoComplete="off"
              spellCheck="false"
            />

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="login-checkbox"
                />
                Remember Me
              </label>

              <Link to="/forget_password" className="login-link">
                Forgot Password?
              </Link>
            </div>  

            <button type="submit" className="login-button">Login</button>

            <div className="social-icons">
              <div className="tooltip-container">
                <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={28} />
                </a>
                <span className="tooltip-text">Email</span>
              </div>
              <div className="tooltip-container">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} />
                </a>
                <span className="tooltip-text">Instagram</span>
              </div>
              <div className="tooltip-container">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={28} />
                </a>
                <span className="tooltip-text">GitHub</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
