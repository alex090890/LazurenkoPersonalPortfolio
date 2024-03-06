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
  popupAnchor: [0, -41],
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customMarkerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Currentposition = () => (
  <div>
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  </div>
);

export default Currentposition;
