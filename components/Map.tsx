'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface IconDefaultWithPrivateMethod extends L.Icon.Default {
    _getIconUrl?: () => string;
}

// Fix for marker icons in Leaflet
delete (L.Icon.Default.prototype as IconDefaultWithPrivateMethod)._getIconUrl;


// Define custom icon
const customIcon: Icon = new L.Icon({
    iconUrl: '/contact/marker.svg',
    iconSize: [32, 32], // width, height
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});


// This is the type Leaflet expects
const position: LatLngExpression = [43.5893, -79.6441];

const LeafletMap = () => {
    return (
        <MapContainer center={position} zoom={13} style={{ height: '678px', width: '587px', borderRadius: '20px', overflow: 'hidden' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>Mississauga Foot Clicnic</Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletMap;