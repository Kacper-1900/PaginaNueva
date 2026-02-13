import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Maps() {
  return (
    <MapContainer center={[28.1272, -15.4314]} zoom={11} style={{ height: "200px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[28.1272, -15.4314]}>
          Nuestra ubicación
      </Marker>
    </MapContainer>
  )
}
