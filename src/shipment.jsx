import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Shipment = () => {
  const mountRef = useRef(null);
  const globeGroup = useRef(new THREE.Group());
  const markers = useRef([]);
  const popupRef = useRef(null);
  const detailPanelRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    scene.add(new THREE.AmbientLight());
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    scene.add(globeGroup.current);

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    globeGroup.current.add(earth);

    const latLongToVector3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const drawBorderLine = (coords, radius) => {
      const denseCoords = [];
      for (let i = 0; i < coords.length - 1; i++) {
        const steps = 5;
        for (let j = 0; j <= steps; j++) {
          const lon = coords[i][0] + ((coords[i + 1][0] - coords[i][0]) * j) / steps;
          const lat = coords[i][1] + ((coords[i + 1][1] - coords[i][1]) * j) / steps;
          denseCoords.push([lon, lat]);
        }
      }
      const points = denseCoords.map(([lon, lat]) => latLongToVector3(lat, lon, radius));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa, opacity: 0.00001 });
      const line = new THREE.Line(geometry, material);
      globeGroup.current.add(line);
    };

    const loadCountryBorders = async () => {
      const res = await fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json");
      const geojson = await res.json();
      geojson.features.forEach((feature) => {
        const geometry = feature.geometry;
        if (geometry.type === "Polygon") {
          geometry.coordinates.forEach((polygon) => drawBorderLine(polygon, 1.001));
        } else if (geometry.type === "MultiPolygon") {
          geometry.coordinates.forEach((multi) => multi.forEach((polygon) => drawBorderLine(polygon, 1.001)));
        }
      });
    };

    const locations = [
      { id: "SHP001", lat: 34.05, lon: -118.25 },
      { id: "SHP002", lat: 40.71, lon: -74.01 },
      { id: "SHP003", lat: 51.51, lon: -0.13 },
      { id: "SHP004", lat: 35.68, lon: 139.69 },
      { id: "SHP005", lat: -33.87, lon: 151.21 }
    ];

    locations.forEach(({ id, lat, lon }) => {
      const markerGeo = new THREE.SphereGeometry(0.025, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(latLongToVector3(lat, lon, 1.01));
      marker.userData = { id, lat, lon };  // Correct field name: id
      globeGroup.current.add(marker);
      markers.current.push(marker);
    });

    loadCountryBorders();

    const popup = document.createElement("div");
    Object.assign(popup.style, {
      position: "absolute", background: "#ffffffee", padding: "10px", border: "2px solid #000",
      borderRadius: "8px", display: "none", pointerEvents: "none", zIndex: 1000
    });
    mount.appendChild(popup);
    popupRef.current = popup;

    const detailPanel = document.createElement("div");
    Object.assign(detailPanel.style, {
      position: "absolute", top: "50px", right: "50px", width: "300px", padding: "15px",
      background: "#000000", border: "2px solid #444", borderRadius: "10px", fontSize: "16px",
      display: "none", zIndex: "1001", boxShadow: "0 0 15px rgba(0,0,0,0.3)"
    });
    document.body.appendChild(detailPanel);
    detailPanelRef.current = detailPanel;

    const animate = () => {
      requestAnimationFrame(animate);
      globeGroup.current.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      mount.removeChild(popup);
      document.body.removeChild(detailPanel);
    };
  }, []);

  const handleSearch = () => {
    const searchId = document.getElementById("searchInput").value.trim();
    const target = markers.current.find(m => m.userData.id === searchId);
    if (!target) {
      alert("Shipper ID not found");
      return;
    }
    const worldPos = target.position.clone().normalize();
    rotateGlobeTo(worldPos, () => showPopup(target));
  };

  function rotateGlobeTo(targetVector, callback) {
    const spherical = new THREE.Spherical();
    spherical.setFromVector3(targetVector);
    const targetLongitude = spherical.theta;

    const duration = 2000;
    const startRotationY = globeGroup.current.rotation.y;
    const endRotationY = -targetLongitude;
    const startZoom = cameraRef.current.position.z;
    const endZoom = 2.5;
    const startTime = performance.now();

    function animateRotation(time) {
      const elapsed = time - startTime;
      const t = Math.min(elapsed / duration, 1);
      const smoothStep = t * t * (3 - 2 * t);
      globeGroup.current.rotation.y = startRotationY + (endRotationY - startRotationY) * smoothStep;
      cameraRef.current.position.z = startZoom + (endZoom - startZoom) * smoothStep;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      if (t < 1) requestAnimationFrame(animateRotation);
      else if (callback) callback();
    }
    requestAnimationFrame(animateRotation);
  }

  function showPopup(marker) {
    const worldPosition = marker.getWorldPosition(new THREE.Vector3());
    const vector = worldPosition.clone().project(cameraRef.current);
    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;

    const popup = popupRef.current;
    popup.innerHTML = `
      <b>Shipper ID:</b> ${marker.userData.id}<br>
      <b>Lat:</b> ${marker.userData.lat}<br>
      <b>Lon:</b> ${marker.userData.lon}<br>
      <button id="moreDetailsBtn">More Details</button>
    `;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    popup.style.display = "block";

    setTimeout(() => {
      const btn = document.getElementById("moreDetailsBtn");
      if (btn) {
        btn.addEventListener("click", () => {
          showShipmentDetails(marker.userData.id, marker.userData.lat, marker.userData.lon);
        });
      }
    }, 0);

    setTimeout(() => {
      popup.style.display = "none";
      const zoomOutStart = performance.now();
      const zoomOutDuration = 2000;
      const zoomOutStartZ = cameraRef.current.position.z;
      const zoomOutEndZ = 4.0;

      function zoomOutAnim(time) {
        const elapsed = time - zoomOutStart;
        const t = Math.min(elapsed / zoomOutDuration, 1);
        cameraRef.current.position.z = zoomOutStartZ + (zoomOutEndZ - zoomOutStartZ) * t;
        if (t < 1) requestAnimationFrame(zoomOutAnim);
      }
      requestAnimationFrame(zoomOutAnim);
    }, 3000);
  }

  function showShipmentDetails(id, lat, lon) {
    const detailPanel = detailPanelRef.current;
    detailPanel.innerHTML = `
      <h3>Shipment Details</h3>
      <p><b>ID:</b> ${id}</p>
      <p><b>Latitude:</b> ${lat}</p>
      <p><b>Longitude:</b> ${lon}</p>
    `;
    detailPanel.style.display = "block";
  }

  return (
    <>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 100 }}>
        <input id="searchInput" placeholder="Enter Shipper ID" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default Shipment;
