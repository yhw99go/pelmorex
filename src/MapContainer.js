import React from 'react';
import { getBoundsWithDetail } from './api/pelmorexAPI.js'
import {Map, InfoWindow, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';
/**
 * @file MapContainer is a React Component. Anything functionality from google map manipulation should be available in MapContainer
 *
 * @module MapContainer
 * @extends React.Component
 */

export default class MapContainer extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          showingInfoWindow: false,
          poisData: [],
          activeMarker: {},
          selectedPlace: {}
        };
  }
  
/**
  * toggle for marker click
  * @method
  * @summary method to update state of the map based on marker click
  * @param {object} props - current props
  * @param {Object} marker - Selected Marker 
  * @param {MouseEvent} e - Click Event
  */
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

/**
  * toggle for map click
  * @method
  * @summary method to update state of the InfoWindows when map is clicked. when map clicked, infowWindow get closed
  * @param {object} props - current props
  */
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

/**
  * Capture for map moved
  * @method
  * @summary when map center is changed, pass new bounds to getBounds()
  * @param {object} props - current props
  * @param {object} map - google map object
  */
  onMapIdle = (props, map) => {
      let ne = map.getBounds().getNorthEast();
      let sw = map.getBounds().getSouthWest();
      this.getBounds(ne,sw)
  };

/**
  * Capture for map moved
  * @method
  * @summary when map center is changed, pass new bounds to getBounds()
  * @param {object} props - current props
  * @param {object} map - google map object
  */
  onInfoWindowOpen = (props, e) => {
    const button = (<button onClick={e => {
      this.props.history.push(`/poidetail`, {label: this.state.selectedPlace.title})
    }}>go to detail</button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
  }

/**
  * call API to get list of poi
  * @method
  * @summary get list of the poi depends on its boundary
  * @param {object} ne - current north east position of the map
  * @param {object} sw - current south west position of the map
  */
  getBounds (ne, sw) {
    getBoundsWithDetail(ne, sw).then(response => response.json())
      .then(json => {this.setState({poisData: json})})
      .catch(error => console.error('Error:', error));
  }

/**
  * create multiple marker
  * @method
  * @summary render multiple marker within map boundaries
  * @return {Array<object>} return list of Markers with designated position
  */
  markerGenerator = () => {
      const {poisData} = this.state;
      if (poisData.length === 0){
          return null;
      } 
      else {
          return (
              poisData.pois.map((item) => 
              <Marker
                  key = {item.id}
                  title = {item.label}
                  name = {item.name}
                  position = {{lat: item.center.lat, lng: item.center.lon}}
                  onClick = {this.onMarkerClick}> 
              </Marker> 
              )
          );
      }
  }

  /**
  * render a component
  * @method
  * @summary render google map with marker and infowindow
  * @return {object} 
  */
  render() {
    return (
      <Map google={this.props.google}
          style={ { height: `700px`, margin: `30px` }}
          initialCenter={{
          lat: 43.6532,
          lng: -79.3832
          }}
          zoom={15}
          onIdle={this.onMapIdle}
          onClick={this.onMapClicked}>
          {this.markerGenerator()}
          <InfoWindow
              onOpen={this.onInfoWindowOpen}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <span>{this.state.selectedPlace.title}</span>
                <div id="iwc" />
              </div>
          </InfoWindow>
      </Map>
    )
  }
}
