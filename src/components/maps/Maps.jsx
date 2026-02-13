import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Maps() {
  return (
    <MapContainer center={[40.4168, -3.7038]} zoom={13} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.4168, -3.7038]}>
        <Popup>
          Nuestra ubicación
        </Popup>
      </Marker>
    </MapContainer>
  )
}
