import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const demoDataFromServer = [
  {
    title: "三創",
    img: "./images/三創.jpg",
    lat: 25.0454978,
    lng: 121.52913,
  },
  {
    title: "光華商場",
    img: "./images/光華商場.jpg",
    lat: 25.0451598,
    lng: 121.5298525,
  },
  {
    title: "NOVA量販(桃園店)",
    img: "./images/NOVA(桃園店).jpg",
    lat: 24.9721474,
    lng: 121.2356706,
  },
];

const customMarker = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

function FCMap() {
  const [state, setState] = useState([]);

  // didMount
  useEffect(() => {
    // 連接資料庫
    // 設定狀態
    setState(demoDataFromServer);
  }, []);

  return (
    <MapContainer
      center={[25.0454978, 121.52913]}
      zoom={13}
      style={{ height: "45vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />

      {state.map(({ title, img, lat, lng }, index) => (
        <Marker
          position={[lat, lng]}
          icon={customMarker}
          key={index}
        >
          <Popup>
            <strong>
              {title} is for popup with lat: {lat} and lon
              {lng}
            </strong>
            <br />
            <img
              style={{
                width: "20rem",
                height: "10rem",
              }}
              src={img}
              alt={title}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default FCMap;
