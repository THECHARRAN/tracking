// Dashboard.jsx
import React, { useState } from "react";
import GlobeIframe from "./GlobeIframe";
import Sidebar from "./sidebar";

const shipmentsData = [
  {
    id: "SHP001", origin: "Los Angeles, USA", originLat: 34.0522, originLon: -118.2437,
    destination: "Hamburg, Germany", destLat: 53.5511, destLon: 9.9937,
    status: "In Transit", expectedDelivery: "2025-06-10"
  },
  {
    id: "SHP002", origin: "Shanghai, China", originLat: 31.2304, originLon: 121.4737,
    destination: "Sydney, Australia", destLat: -33.8688, destLon: 151.2093,
    status: "Delivered", expectedDelivery: "2025-05-28"
  },
  {
    id: "SHP003", origin: "Mumbai, India", originLat: 19.0760, originLon: 72.8777,
    destination: "London, UK", destLat: 51.5074, destLon: -0.1278,
    status: "In Transit", expectedDelivery: "2025-06-15"
  },
  {
    id: "SHP004", origin: "Tokyo, Japan", originLat: 35.6762, originLon: 139.6503,
    destination: "New York, USA", destLat: 40.7128, destLon: -74.0060,
    status: "Delivered", expectedDelivery: "2025-05-30"
  },
  {
    id: "SHP005", origin: "São Paulo, Brazil", originLat: -23.5505, originLon: -46.6333,
    destination: "Cape Town, South Africa", destLat: -33.9249, destLon: 18.4241,
    status: "In Transit", expectedDelivery: "2025-06-20"
  },
  {
    id: "SHP006", origin: "Moscow, Russia", originLat: 55.7558, originLon: 37.6173,
    destination: "Toronto, Canada", destLat: 43.6511, destLon: -79.3470,
    status: "Delivered", expectedDelivery: "2025-05-25"
  },
  {
    id: "SHP007", origin: "Dubai, UAE", originLat: 25.276987, originLon: 55.296249,
    destination: "Singapore", destLat: 1.3521, destLon: 103.8198,
    status: "In Transit", expectedDelivery: "2025-06-18"
  },
  {
    id: "SHP008", origin: "Cairo, Egypt", originLat: 30.0444, originLon: 31.2357,
    destination: "Buenos Aires, Argentina", destLat: -34.6037, destLon: -58.3816,
    status: "Delivered", expectedDelivery: "2025-05-22"
  },
];

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const [shipments] = useState(shipmentsData);
  const total = shipments.length;
  const inTransit = shipments.filter((s) => s.status === "In Transit").length;
  const delivered = shipments.filter((s) => s.status === "Delivered").length;

  const globeLocations = shipments.flatMap((s) => [
    {
      id: `${s.id}-origin`, lat: s.originLat, lon: s.originLon,
      city: s.origin, type: "Origin", destination: s.destination,
      origin: s.origin, shipmentId: s.id, status: s.status, expectedDelivery: s.expectedDelivery
    },
    {
      id: `${s.id}-destination`, lat: s.destLat, lon: s.destLon,
      city: s.destination, type: "Destination", destination: s.destination,
      origin: s.origin, shipmentId: s.id, status: s.status, expectedDelivery: s.expectedDelivery
    }
    
  ]);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
      <div
        style={{
          marginLeft: sidebarExpanded ? 220 : 70,
          transition: "margin-left 0.3s",
          padding: 32,
          background: "#f5f8fb",
          flex: 1,
          overflowY: "auto",
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 24, color: "#333" }}>📦 Shipment Dashboard</h1>

        <div style={{ display: "flex", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
          {[{ label: "Total Shipments", value: total, bg: "#2196f3" },
            { label: "In Transit", value: inTransit, bg: "#ffb300" },
            { label: "Delivered", value: delivered, bg: "#4caf50" }].map((item) => (
            <div key={item.label} style={{
              flex: 1,
              minWidth: 180,
              backgroundColor: item.bg,
              color: "#fff",
              borderRadius: 12,
              padding: 20,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h2 style={{ margin: 0, fontSize: 28 }}>{item.value}</h2>
              <p style={{ margin: 0, fontSize: 16 }}>{item.label}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={{ flex: 2, minWidth: 350, backgroundColor: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginBottom: 16 }}>📝 Shipment List</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f0f4f8" }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Origin</th>
                  <th style={thStyle}>Destination</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Expected</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((s) => (
                  <tr key={s.id}>
                    <td style={tdStyle}>{s.id}</td>
                    <td style={tdStyle}>{s.origin}</td>
                    <td style={tdStyle}>{s.destination}</td>
                    <td style={tdStyle}>
                      <span style={{
                        padding: "4px 8px",
                        backgroundColor: s.status === "Delivered" ? "#4caf50" : "#ffb300",
                        color: "#fff",
                        borderRadius: "6px",
                        fontSize: 12,
                      }}>{s.status}</span>
                    </td>
                    <td style={tdStyle}>{s.expectedDelivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ flex: 1, minWidth: 320 }}>
            <h3 style={{ marginBottom: 12 }}>🌍 Global Overview</h3>
            <GlobeIframe locations={globeLocations} />
          </div>
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "10px 12px",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px 12px",
  borderBottom: "1px solid #eee",
  fontSize: 14,
};

export default Dashboard;