import React, { useState } from "react";
import Sidebar from "../sidebar";
// import GlobeIframe from "./GlobeIframe"; // Uncomment if you want to use the globe visualization
// import Globe from "react-globe.gl"; // Uncomment if you want to use the globe visualization
const shipmentsData = [
  {
    id: "SHP001",
    origin: "Los Angeles, USA",
    destination: "Hamburg, Germany",
    status: "In Transit",
    expectedDelivery: "2025-06-10",
  },
  {
    id: "SHP002",
    origin: "Shanghai, China",
    destination: "Sydney, Australia",
    status: "Delivered",
    expectedDelivery: "2025-05-28",
  },
  {
    id: "SHP003",
    origin: "Mumbai, India",
    destination: "London, UK",
    status: "In Transit",
    expectedDelivery: "2025-06-15",
  },
  {
    id: "SHP004",
    origin: "Tokyo, Japan",
    destination: "New York, USA",
    status: "Delivered",
    expectedDelivery: "2025-05-30",
  },
  {
    id: "SHP005",
    origin: "São Paulo, Brazil",
    destination: "Cape Town, South Africa",
    status: "In Transit",
    expectedDelivery: "2025-06-20",
  },
  {
    id: "SHP006",
    origin: "Moscow, Russia",
    destination: "Beijing, China",
    status: "Delivered",
    expectedDelivery: "2025-05-25",
  },
  {
    id: "SHP007",
    origin: "Toronto, Canada",
    destination: "Mexico City, Mexico",
    status: "In Transit",
    expectedDelivery: "2025-06-05",
  },
  {
    id: "SHP008",
    origin: "Berlin, Germany",
    destination: "Paris, France",
    status: "Delivered",
    expectedDelivery: "2025-05-22",
  },
];

const Dashboard = () => {
  const [shipments] = useState(shipmentsData);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const total = shipments.length;
  const inTransit = shipments.filter((s) => s.status === "In Transit").length;
  const delivered = shipments.filter((s) => s.status === "Delivered").length;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#e0e0e0",
      }}
    >
      <Sidebar />
      <div style={{ padding: "30px", flex: 1 }}>
        <h1 style={{ fontSize: 28, marginBottom: 24 }}>Shipment Dashboard</h1>

        {/* Summary Cards */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 30,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Total Shipments", value: total },
            { label: "In Transit", value: inTransit },
            { label: "Delivered", value: delivered },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                flex: 1,
                minWidth: 180,
                backgroundColor: "#1e1e1e",
                borderRadius: 12,
                padding: "24px 20px",
                transition: "transform 0.2s, box-shadow 0.2s",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(0, 188, 212, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.3)";
              }}
            >
              <h2 style={{ margin: 0, fontSize: 28, color: "#00bcd4" }}>
                {value}
              </h2>
              <p style={{ margin: 0, fontSize: 14, color: "#9e9e9e" }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Tables and Detail Panels */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {/* Shipment Table */}
          <div
            style={{
              flex: 2,
              minWidth: 320,
              backgroundColor: "#1e1e1e",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              overflowX: "auto",
            }}
          >
            <h3 style={{ marginBottom: 16, fontWeight: 600 }}>
              Shipment List
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#2a2a2a" }}>
                  {["ID", "Origin", "Destination", "Status", "Expected"].map(
                    (th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 10px",
                          borderBottom: "1px solid #333",
                          textAlign: "left",
                          color: "#bdbdbd",
                        }}
                      >
                        {th}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {shipments.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => setSelectedShipment(s)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedShipment?.id === s.id ? "#333" : "transparent",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedShipment?.id !== s.id)
                        e.currentTarget.style.backgroundColor = "#2b2b2b";
                    }}
                    onMouseLeave={(e) => {
                      if (selectedShipment?.id !== s.id)
                        e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <td style={{ padding: 12 }}>{s.id}</td>
                    <td style={{ padding: 12 }}>{s.origin}</td>
                    <td style={{ padding: 12 }}>{s.destination}</td>
                    <td style={{ padding: 12 }}>
                      <span
                        style={{
                          backgroundColor:
                            s.status === "Delivered" ? "#4caf50" : "#ff9800",
                          padding: "4px 10px",
                          borderRadius: 8,
                          fontSize: 12,
                          color: "#fff",
                        }}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>{s.expectedDelivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Globe */}
        {/* <div style={{ flex: 1, minWidth: 320 }}>
          <h3 style={{ marginBottom: 12 }}>🌍 Global Overview</h3>
          <GlobeIframe locations={globeLocations} />
        </div> */}

          {/* Shipment Detail Panel */}
          <div
            style={{
              flex: 1,
              minWidth: 280,
              backgroundColor: "#1e1e1e",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 style={{ marginBottom: 16 }}>Shipment Details</h3>
            {selectedShipment ? (
              <div style={{ lineHeight: "1.6" }}>
                <p>
                  <strong>ID:</strong> {selectedShipment.id}
                </p>
                <p>
                  <strong>Origin:</strong> {selectedShipment.origin}
                </p>
                <p>
                  <strong>Destination:</strong> {selectedShipment.destination}
                </p>
                <p>
                  <strong>Status:</strong> {selectedShipment.status}
                </p>
                <p>
                  <strong>Expected:</strong> {selectedShipment.expectedDelivery}
                </p>
              </div>
            ) : (
              <p style={{ color: "#888" }}>
                Select a shipment to see details.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
