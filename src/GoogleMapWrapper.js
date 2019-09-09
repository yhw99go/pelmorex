import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer.js'

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBY1dvS9jsf5VBlZJhkYCNxEj3o0DhI4zM")
})(MapContainer)