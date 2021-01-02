import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Button } from '@material-ui/core';
import DirectionsIcon from '@material-ui/icons/Directions';
                                
// Components
import { PrimarySearchAppBar, BusStops, Buses } from '../index';

import { fetchRoutes } from '../utils/FirebaseAPI';

const limeOptions = { color: '#01497c'};

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
    const [routeLine,setRouteLine] = useState([]);
    const [stopsCoords,setStopsCoords] = useState([]);
    const [stopsNames,setStopsNames] = useState([]);
    const [choferes,setChoferes] = useState([]);


    function handleRouteSelected(idx){
        var route = routes[idx];
        setRouteName(route['Nombre']);

        var region = route['RegionInicial'];
        setRegionCoords([region.latitude, region.longitude]);
        
        var polyline = [];
        for(var coords of route['Coordenada']){
            polyline.push([coords.latitude, coords.longitude]);
        }
        setRouteLine(polyline);

        var stopsCoords = [];
        var stopsNames = [];
        for(var coords of route['StopsLocation']){
            stopsCoords.push([coords.latitude, coords.longitude]);
        } 
        for(var name of route['StopsNombre']){
            stopsNames.push(name);
        }
        setStopsCoords(stopsCoords);
        setStopsNames(stopsNames);

        setChoferes(route['choferes']);
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

                <BusStops coords={stopsCoords} names={stopsNames}/>
                <Buses choferes={choferes}/>
                <Polyline pathOptions={limeOptions} positions={routeLine} />
                
                {/* Hooks of the map */}   
                <RegionChangeEvent center={regionCoords}/>
            </MapContainer>
        </div>
        );
}
        



