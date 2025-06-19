import React, { useState } from "react";
import OpenStreetMap from "./openstreetmap";
import Shipment from "./shipment";

const Tracking = () => {
  const [shipperId, setShipperId] = useState("");

  const details = {
    containerNumber: "A123",
    status: "In Transit",
    currentLocation: "Arabian Sea",
    speed: "25 knots",
    eta: "3 days"
  };

  const handleSearch = () => {
    console.log("Searching for:", shipperId);
    // You can connect this to backend API
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#0b0c10",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
      color: "#f5f5f5",
      padding: "20px",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>
      
      <div style={{
        display: "flex",
        width: "100%",
        height: "100%",
        gap: "30px",
        animation: "fadeIn 1.5s ease"
      }}>
        
        {/* LEFT PANEL */}
        <div style={{
          flex: 1,
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 25px rgba(0, 255, 195, 0.4)"
        }}>
          
          {/* Shipment Details */}
          <div>
            <h2 style={{
              color: "#00ffc3",
              fontSize: "22px",
              borderBottom: "2px solid #00ffc3",
              paddingBottom: "10px"
            }}>
              🚢 Shipment Details
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginTop: "20px"
            }}>
              {Object.entries(details).map(([key, value]) => (
                <div key={key} style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "8px 12px",
                  textAlign: "center"
                }}>
                  <div style={{ color: "#aaa", fontSize: "11px" }}>{key}</div>
                  <div style={{ fontWeight: "700", fontSize: "15px", color: "#fff" }}>
                    {key === "status" ? (
                      <span style={{ color: details.status === "In Transit" ? "#00ffc3" : "#ff3c3c" }}>
                        {value}
                      </span>
                    ) : value}
                  </div>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div style={{ marginTop: "20px" }}>
              <input 
                placeholder="Enter Shipper ID"
                value={shipperId}
                onChange={(e) => setShipperId(e.target.value)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "10px",
                  border: "1px solid #00ffc3",
                  background: "transparent",
                  color: "#fff",
                  width: "100%",
                  outline: "none"
                }}
              />
              <button 
  onClick={handleSearch}
  style={{
    marginTop: "10px",
    background: "linear-gradient(45deg, #00ffc3, #ff3cac)",  // Re-enabled your gradient
    color: "#fff",  // Text color (correct)
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    boxShadow: "0 0 10px #00ffc3",  // Optional nice glow
    width: "100%",
    transition: "0.3s",
    height: "40px",  // Slightly increased height for better design
    fontSize: "16px",  // Added for better text size
    cursor: "pointer"
  }}
>
  Search
</button>

            </div>

            {/* Progress Bar */}
            {/* <div style={{
              backgroundColor: "#333",
              borderRadius: "10px",
              height: "10px",
              marginTop: "20px"
            }}>
              <div style={{
                width: "70%",
                height: "100%",
                background: "linear-gradient(90deg, #00ffc3, #00c3ff)",
                transition: "width 0.5s ease"
              }}></div>
            </div> */}
          </div>

          {/* Globe */}
          <div style={{ marginTop: "15px", flex: 1 }}>
            <Shipment />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{
          flex: 2,
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 25px rgba(0, 255, 195, 0.4)"
        }}>
          <OpenStreetMap />
        </div>
      </div>
    </div>
  );
}

export default Tracking;
