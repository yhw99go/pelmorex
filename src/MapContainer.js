import React from 'react';
import { getBoundsWithDetail } from './api/pelmorexAPI.js'
import {Map, InfoWindow, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';

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
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onMapIdle = (props, map) => {
      let ne = map.getBounds().getNorthEast();
      let sw = map.getBounds().getSouthWest();
      this.getBounds(ne,sw)
  };

  onInfoWindowOpen = (props, e) => {
    const button = (<button onClick={e => {
      this.props.history.push(`/poidetail`, {label: this.state.selectedPlace.title})
    }}>go to detail</button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
  }

  getBounds (ne, sw) {
    getBoundsWithDetail(ne, sw).then(response => response.json())
      .then(json => {this.setState({poisData: json})})
      .catch(error => console.error('Error:', error));
  }

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
