import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix für fehlende Marker-Icons in Leaflet mit React
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function MapView() {
  const [markers, setMarkers] = useState([
    { id: 1, position: [48.7758, 9.1829], info: 'Mister X letzte Sichtung' }, // Stuttgart Zentrum
  ])

  function handleMapClick(e) {
    const newMarker = {
      id: Date.now(),
      position: [e.latlng.lat, e.latlng.lng],
      info: 'Neue Sichtung',
    }
    setMarkers((prev) => [...prev, newMarker])
  }

  return (
    <MapContainer
      center={[48.7758, 9.1829]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      onClick={handleMapClick}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.info}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
