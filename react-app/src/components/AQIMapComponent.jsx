import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AQIMapComponent = () => {
  useEffect(() => {
    // Initialize Leaflet map
    const map = L.map('map').setView([43.238949, 76.889709], 10);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add AQICN Map Tile layer
    L.tileLayer('https://tiles.aqicn.org/tiles/usepa-aqi/{z}/{x}/{y}.png?token=YOUR_API_KEY', {
      attribution: 'Air Quality Map &copy; <a href="https://aqicn.org/">AQICN</a>',
      maxZoom: 18
    }).addTo(map);

    // Clean up function
    return () => {
      map.remove(); 
    };
  }, []);

  return (
    <div id="map" style={{ height: '580px' }}></div>
  );
};

export default AQIMapComponent;