import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Auth/loginpage/login';
import Dashboard from './pages/dashboard';
import Shipment from './shipment';
import MetricsPanel from './pages/metricspanel/metrixpanel'; 
import Forget from './Auth/forgetpage/forget_password';  
import Reset from './Auth/resetpassword/resetpassword';
import Conform from './Auth/Changepassword/changepassword';
import RoleSelection from './Auth/roleselection/roleselection';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/forget_password" element={<Forget />} />
        <Route path="/resetpassword" element={<Reset />} />
        <Route path="/changepassword" element={<Conform />} />
        {/* Define other routes here */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/metricspanel" element={<MetricsPanel />} />
        {/* Redirect any unknown route to /login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
