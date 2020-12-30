import React, { useState, useEffect } from "react";
import { Marker, Popup } from 'react-leaflet';

import { iconBus } from '../components/Icons';
import 'leaflet/dist/leaflet.css';

import { fetchBuses } from '../utils/GetBuses';


const SECONDS = 1000;

export default function Buses(props){    
    
    const [timer,setTimer] = useState(null);

    const c1 = [20.52374172943338, -100.81533087219081];
    const c2 = [20.52674172943338, -100.81533087219081];

    const [coords,setCoords] = useState(c1);
    
    useEffect(function() {

        if(props.choferes.length > 0){     
            if(timer !== null) clearInterval(timer);
            setTimer(setInterval(function(){
                getBusesCoords();
            }, 4*SECONDS));
        }
    },[props.choferes]);

    const [name,setName] = useState('ok');

    async function getBusesCoords(){
        
        if(props.choferes.length == 0) return;

        var buses = await fetchBuses(props.choferes);
        setName(prev => buses[0]);
/*        //setCoords(prev => auxArray);
    */
    };

    return (
        <>
            <Marker
                position={coords}
                icon={iconBus}>
                    <Popup>{name}</Popup>
            </Marker>   
        </>
        );
}
        



