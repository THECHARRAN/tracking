import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Truck,
  BarChart2,
  Settings,
  User
} from "lucide-react";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard />, label: "Dashboard", path: "/dashboard" },
    { icon: <Truck />, label: "Shipment", path: "/shipment" },
    { icon: <BarChart2 />, label: "Analytics", path: "/metricspanel" },
    { icon: <Settings />, label: "Settings", path: "/settings" },
    { icon: <User />, label: "Profile", path: "/profile" }
  ];

  return (
    <ul className="menu-bar">
      {menuItems.map((item, index) => (
        <li key={index} onClick={() => navigate(item.path)} className="menu-item">
          <span className="menu-icon">{item.icon}</span>
          <span className="menu-label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
