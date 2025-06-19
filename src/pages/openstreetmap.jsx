import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "./openstreetmap.css"; // Import your custom CSS for styling

// Icons
const originIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  cursor: 'url("/public/cursor (3).cur"), pointer'
});

const liveIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  cursor: 'url("/public/cursor (3).cur"), pointer'
});

const destinationIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  cursor: 'url("/public/cursor (3).cur"), pointer'
});

const OpenStreetMap = () => {
  const [containers, setContainers] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get("/api/containers")
    .then(res => {
      setContainers(res.data);
      setLoading(false); // ✅ only stop loading when data is ready
    })
    .catch(err => {
      console.error("❌ Error fetching containers:", err);
      setLoading(false); // ✅ also stop loading on error
    });
}, []);
if (loading) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}

  const handleMoreDetails = (containerNumber) => {
    setExpanded(prev => ({
      ...prev,
      [containerNumber]: !prev[containerNumber]
    }));
  };

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={3} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
      />

      {Array.isArray(containers) && containers.map((container, idx) => {
        const {
          containerNumber,
          live_Latitude, live_Longitude,
          loadingPort_latitude, loadingPort_longitude,
          dischargePort_latitude, dischargePort_longitude
        } = container;

        // Skip if any coordinate is null
        if (
          live_Latitude == null || live_Longitude == null ||
          loadingPort_latitude == null || loadingPort_longitude == null ||
          dischargePort_latitude == null || dischargePort_longitude == null
        ) return null;

        return (
          <React.Fragment key={idx}>
            {/* Origin */}
            <Marker position={[loadingPort_latitude, loadingPort_longitude]} icon={originIcon} cursor='url("/public/cursor (3).cur"), pointer'>
              <Popup><strong>Origin:</strong> {containerNumber}</Popup>
            </Marker>

            {/* Live Location */}
            <Marker position={[live_Latitude, live_Longitude]} icon={liveIcon} cursor='url("/public/cursor (3).cur"), pointer'> 
              <Popup>
                <div style={{ fontSize: "14px", fontFamily: "Poppins", color: "#fff", background: "#131417", padding: "10px", borderRadius: "6px" }}>
                  Container: <strong>{containerNumber}</strong><br />
                  Status: <strong>In Transit</strong><br />
                  {expanded[containerNumber] && (
                    <>
                      Latitude: <strong>{live_Latitude}</strong><br />
                      Longitude: <strong>{live_Longitude}</strong><br />
                    </>
                  )}
                  <button
                    onClick={() => handleMoreDetails(containerNumber)}
                    style={{
                      marginTop: "8px",
                      background: "#00ffc3",
                      color: "#000",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                     cursor: 'url("/public/cursor.cur"), pointer'

                    }}
                  >
                    {expanded[containerNumber] ? "Hide Details" : "More Details"}
                  </button>
                </div>
              </Popup>
            </Marker>

            {/* Destination */}
            <Marker position={[dischargePort_latitude, dischargePort_longitude]} icon={destinationIcon}  cursor='url("/public/cursor (3).cur"), pointer'>
              <Popup><strong>Destination:</strong> {containerNumber}</Popup>
            </Marker>

            {/* Route Polyline */}
            <Polyline
              positions={[
                [loadingPort_latitude, loadingPort_longitude],
                [live_Latitude, live_Longitude],
                [dischargePort_latitude, dischargePort_longitude]
              ]}
              pathOptions={{ color: "#00ffc3", weight: 3, dashArray: "6, 8" }}
            />
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
};

export default OpenStreetMap;
