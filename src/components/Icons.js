import L from 'leaflet';
import bus from "../assets/icons/bus.png";
import busStop from "../assets/icons/busStop.png";

const iconBus = new L.Icon({
    iconUrl: bus,
    iconRetinaUrl: bus,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

const iconStop = new L.Icon({
    iconUrl: busStop,
    iconRetinaUrl: busStop,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

export { iconBus, iconStop };
