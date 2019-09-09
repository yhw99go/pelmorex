import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer.js'
/**
 * React Component wrapper around MapContainer
 * 
 * @file Using GoogleAPI Wrapper pass APIKey and map object to the MapContainer
 * @module GoogleApiWrapper
 */

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
