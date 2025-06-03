import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ expanded, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: "📦", path: "/dashboard" },
    { label: "Shipments", icon: "📍", path: "/shipments" },
    { label: "Settings", icon: "⚙️", path: "/settings" },
  ];

  const menuItemStyle = {
    marginBottom: 4,
    fontSize: 16,
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    padding: "5px 0",
    borderRadius: 3,
  };

  return (
    <div
      style={{
        width: expanded ? 200 : 60,
        transition: "width 0.3s",
        height: "100vh",
        backgroundColor: "#2c3e50",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {/* Circle toggle inside sidebar */}
      <div style={{ alignSelf: "flex-start", marginLeft: 10 }}>
        <button
          onClick={toggleSidebar}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "#3498db",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          title="Toggle Sidebar"
        >
          {expanded ? "◀" : "▶"}
        </button>
      </div>

      <div style={{ marginTop: 40, textAlign: "center", width: "100%" }}>
        {menuItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              style={{
                ...menuItemStyle,
                display: "block",
                backgroundColor: isActive ? "#2980b9" : "transparent",
                textDecoration: "none",
                color: "white",
                padding: "6px 0",
              }}
            >
              {expanded ? `${icon} ${label}` : icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
