import React from "react";
import { Marker, Popup } from 'react-leaflet';

import { iconStop } from '../components/Icons';
import 'leaflet/dist/leaflet.css';


export default function BusStops(props){    
   
    return (
        <>
            {props.coords.map(function(coords, idx){
                    return(
                        <Marker
                            key={idx} 
                            position={coords}
                            icon={ iconStop }>
                            <Popup>
                                {props.names[idx]}
                            </Popup>
                        </Marker>   
                    );
                }
            )}
        </>
        );
}
        



