import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { PrimarySearchAppBar } from '../index';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const polyline = [
    [20.54031977451501, -100.82035201722248],
    [20.531237237766984, -100.81889289558936],
    [20.53099610112393, -100.81275600166177],
]
const limeOptions = { color: 'purple' }


export default function MapScreen(){    
        

    return (
        <>
        <p style={{padding: '15px'}}/>
        <PrimarySearchAppBar/>
        <MapContainer center={[20.52374172943338, -100.81533087219081]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[20.52374172943338, -100.81533087219081]}/>
            <Polyline pathOptions={limeOptions} positions={polyline} />   
        </MapContainer>
        </>
        );
}
        



