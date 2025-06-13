import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUser, FaHeadset, FaUsers, FaTools } from 'react-icons/fa';
import './roleselection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/login/${role}`);
  };

  return (
    <div className="role-wrapper">
      <h2 className="role-title"> Select Your Role</h2>
      <div className="role-cards">
        <div className="role-card admin" onClick={() => handleRoleSelect('admin')}>
          <FaUserShield size={50} style={{ marginBottom: '15px', color: '#00bfff' }} />
          <h3>Admin</h3>
          <p>Manage system and monitor shipments.</p>
        </div>

        <div className="role-card user" onClick={() => handleRoleSelect('user')}>
          <FaUser size={50} style={{ marginBottom: '15px', color: '#00bfff' }} />
          <h3>User</h3>
          <p>Track your own shipments easily.</p>
        </div>

        <div className="role-card agent" onClick={() => handleRoleSelect('agent')}>
          <FaHeadset size={50} style={{ marginBottom: '15px', color: '#00bfff' }} />
          <h3>Agent</h3>
          <p>Handle customer queries and status updates.</p>
        </div>

        <div className="role-card manager" onClick={() => handleRoleSelect('manager')}>
          <FaUsers size={50} style={{ marginBottom: '15px', color: '#00bfff' }} />
          <h3>Manager</h3>
          <p>Oversee team performance and shipments.</p>
        </div>

        <div className="role-card worker" onClick={() => handleRoleSelect('worker')}>
          <FaTools size={50} style={{ marginBottom: '15px', color: '#00bfff' }} />
          <h3>Worker</h3>
          <p>Execute shipment handling tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
