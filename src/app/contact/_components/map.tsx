'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer
      preferCanvas={true}
      center={[42.16258, 24.74343]}
      zoom={15}
      scrollWheelZoom={true}
      className="w-full min-w-[340px] h-auto min-h-[244px] sm:h-[288px] sm:w-[458px] -z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[42.16258, 24.74343]}>
        <Popup>
          <p>Plovdiv, Bulgaria, bul Vasil Levski 96</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
