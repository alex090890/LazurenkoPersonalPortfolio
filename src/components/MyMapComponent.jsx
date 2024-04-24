import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarkerIconUrl from "./marker.png";

const customMarkerIcon = new L.Icon({
  iconUrl: customMarkerIconUrl,
  iconSize: [25, 25],
  iconAnchor: [12, 41],
});

function MyMapComponent() {
  // Замените [51.505, -0.09] на координаты вашей специфической позиции
  const [position, setPosition] = useState([49.864300, 8.638030]);

  return (
    <MapContainer center={position} zoom={13} style={{ height: "50vh", width: "70%", margin: "10px 15%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMapComponent;