import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import { Button } from '@material-ui/core';
                                
import 'leaflet/dist/leaflet.css';

import { PrimarySearchAppBar } from '../index';
import { iconBus } from '../components/Icons';

import { fetchRoutes } from '../utils/GetRoutes';

import DirectionsIcon from '@material-ui/icons/Directions';
import { MapOutlined } from "@material-ui/icons";

const polyline = [
    [20.54031977451501, -100.82035201722248],
    [20.531237237766984, -100.81889289558936],
    [20.53099610112393, -100.81275600166177],
]
const limeOptions = { color: 'purple' }

const RouteNameStyle = {
    position: 'absolute', 
    left: '50%', 
    top: '90%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
}


export default function MapScreen(){    
   
    const [routes,setRoutes] = useState([]);
    const [routeName,setRouteName] = useState('Ruta');
    const [regionCoords,setRegionCoords] = useState([20.52374172943338, -100.81533087219081]);

    function handleRouteSelected(idx){
        var route = routes[idx];
        setRouteName(route['Nombre']);

        var region = route['RegionInicial'];
        setRegionCoords([region.latitude, region.longitude]);
    }   

    useEffect(async function(){
        var routes = await fetchRoutes(); 
        setRoutes(routes);
    }
    ,[])

    function RegionChangeEvent() {
        const map = useMap();
        map.flyTo(regionCoords, map.getZoom())
        return null;
    }
      

    return (
        <div>
            <p style={{padding: '15px'}}/>
            <PrimarySearchAppBar 
                routes={routes}
                handleRouteSelected={handleRouteSelected}    
            />
            <Button 
                color='primary'
                variant="contained" 
                disableRipple 
                disableFocusRipple
                style={RouteNameStyle}
                startIcon={<DirectionsIcon />}
            >
                {routeName}
            </Button>
            <MapContainer center={regionCoords} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                    position={[20.54374172943338, -100.81533087219081]}
                    icon={ iconBus }>
                    <Popup>A pretty pop up</Popup>
                </Marker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
                
                {/* Hooks of the map */}   
                <RegionChangeEvent center={regionCoords}/>
            </MapContainer>
        </div>
        );
}
        



