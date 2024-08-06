import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/pin';

function Map({items}){
    // Use the first item's coordinates to center the map
    const center = items.length > 0 ? [items[0].latitude, items[0].longitude] : [52.4797, -1.90269];

    return (
        <MapContainer center={center} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {items.map(item => (
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>
    )
}

export default Map;
