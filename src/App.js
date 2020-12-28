import './App.css';
import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './App.css';

import ProtectedRoute from './components/ProtectedRoute';

// Sección de screens
import LoginScreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';
import MapScreen from './screens/MapScreen';

var hist = createBrowserHistory();

export default function App(props) {
  return (
    //<LoginScreen/>
    <MapScreen />
  );
}


