import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';

function Maps() {
    return (
        <div className="maps">
            <h2>Mapa de Ubicación</h2>
            <MapContainer center={[40.7128, -74.0060]} zoom={13} scrollWheelZoom={false} className="map-container">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.7128, -74.0060]}>
                    <Popup>
                        Estamos aquí: Nueva York, EE.UU.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Maps;