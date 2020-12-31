import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as PrimarySearchAppBar } from './components/PrimarySearchAppBar';
export { default as MenuNombreRutas } from './components/MenuNombreRutas';
export { default as MenuProfile } from './components/MenuProfile';
export { default as MenuSearch } from './components/MenuSearch';
export { default as ModalProfile } from './components/ModalProfile';
export { default as BusStops } from './components/BusStops';
export { default as Buses } from './components/Buses';
