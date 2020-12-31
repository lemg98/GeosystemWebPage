import React, { useState, useEffect } from "react";
import { Marker, Popup } from 'react-leaflet';

import { iconBus } from '../components/Icons';
import 'leaflet/dist/leaflet.css';

import { fetchBuses } from '../utils/GetBuses';


const SECONDS = 1000;

export default function Buses(props){    
    
    const [timer,setTimer] = useState(null);

    const [coords,setCoords] = useState([]);

    useEffect(function() {

        setCoords([]);
        if(props.choferes.length > 0){     
            if(timer !== null) clearInterval(timer);
            setTimer(setInterval(function(){
                getBusesCoords();
            }, 3*SECONDS));
        }
    },[props.choferes]);

    const [names,setNames] = useState('ok');

    async function getBusesCoords(){
        
        if(props.choferes.length == 0) return;

        var buses = await fetchBuses(props.choferes);
        setCoords(prev => buses.coords);
        setNames(prev => buses.names);
    };

    return (
        <>
            {coords.map(function(item, idx){
                    return(
                        <Marker
                            key={idx}
                            position={item}
                            icon={iconBus}
                        >
                            <Popup>{names[idx]}</Popup>
                        </Marker>
                    );
                }
            )}
        </>
        );
}
        



