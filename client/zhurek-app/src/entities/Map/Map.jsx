import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import locationIcon from '../../shared/assets/icons/location_green.svg';

const position = [43.2368813, 76.9308084];

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export const ColorfulMap = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  return (
    <div className="w-full h-[500px] rounded-2xl shadow-lg overflow-hidden">
      <MapContainer center={position} zoom={25} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap, &copy; Carto'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup keepInView>
            Алматы, ул. Сатпаева, 22
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};