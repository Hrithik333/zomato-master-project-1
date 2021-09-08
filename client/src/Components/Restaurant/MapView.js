import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MdContentCopy } from 'react-icons/md';
import { FaDirections } from 'react-icons/fa';

// 26.27596515304485, 73.00643555136229

const MapView = (props) => {
    return (
        <>
            <div>
                <h4 className="text-xl">Call</h4>
                <h5 className="text-zomato-400 font-medium">{props.phone}</h5>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl">Direction</h4>
                <div className="w-full h-48">
                    <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                            <Popup>
                                {props.title}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="flex flex-col gap-4">
                    <p>{props.address}</p>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg"><MdContentCopy /> Copy</button>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border rounded-lg"><FaDirections className="text-zomato-400" />Direction</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapView
