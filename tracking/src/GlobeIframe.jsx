// GlobeIframe.jsx
// import React from "react";

// const GlobeIframe = () => {
//   return (
//     <iframe
//       src="http://localhost:5173/"
//       title="3D Globe"
//       style={{
//         width: "100%",
//         height: "300px",
//         border: "none",
//         borderRadius: 8,
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//       }}
//     />
//   );
// };

// export default GlobeIframe;
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const GlobeIframe = ({ locations }) => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <Globe
  ref={globeEl}
  globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
  backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
  backgroundColor="rgba(0,0,0,0)"  // FIX: Use valid color string
  pointsData={locations}
  pointLat="lat"
  pointLng="lon"
  pointColor={(d) => (d.type === "Origin" ? "green" : "red")}
  pointRadius={0.5}
  pointLabel={(d) =>
    `
    <div style="text-align: left">
      <b>${d.type}</b><br/>
      City: ${d.city}<br/>
      Destination: ${d.destination}<br/>
      Origin: ${d.origin}<br/>
      Shipment ID: ${d.shipmentId}<br/>
      Status: ${d.status || "N/A"}<br/>                                   
      Expected: ${d.expectedDelivery || "N/A"}
    </div>
    `
  }
  width={400}
  height={350}
/>

  );
};

export default GlobeIframe;



