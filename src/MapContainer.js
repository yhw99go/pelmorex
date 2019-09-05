import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    state = {
      showingInfoWindow: false,
      poisData: [],
      activeMarker: {},
      selectedPlace: {},
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
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
        console.log(this.state.poisData)
    };

    getBounds(ne,sw) {
        var url = 'https://poi.data.pelmorex.com/api/v1/pois/search';
        var params = {
                "client_key": "51e05a51-5caf-42db-aedf-d658eb88f2af",
                "poi_fields" : "id,name,label,center"
        }
        var data = {
            "filters": {
                "bounding_box": {
                    "top_left_lat": ne.lat(),
                    "top_left_lon": sw.lng(),
                    "bottom_right_lat": sw.lat(),
                    "bottom_right_lon": ne.lng()
                }
            }
        }

        fetch(url + "?" + Object.keys(params).map((key) => { return key + "=" + params[key] }).join("&"), {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {this.setState({poisData: json})})
        .catch(error => console.error('Error:', error));
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
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBY1dvS9jsf5VBlZJhkYCNxEj3o0DhI4zM")
})(MapContainer)