import React from 'react';
import { shallow, mount } from 'enzyme';
import MapContainer from './MapContainer';
import { expect } from 'chai';

describe('MapContainer', () => {

 it('on map click window box status change', () => {
    const wrapper = shallow(<MapContainer />);
    wrapper.setState({ showingInfoWindow: true });
    wrapper.instance().onMapClicked()
    expect(wrapper.state().showingInfoWindow).to.equal(false);
  }); 

  it('check map is rendered', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.find('Map')).to.have.length(1);
  }); 

  it('check infowWindow is rendered', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.find('InfoWindow')).to.have.length(1);
  }); 

/*   it('check api and getbounds working ', () => {
    const wrapper = shallow(<MapContainer />);
    const ne =  { "lat": 43.664066723754026, "lng": -79.3578799468994 }
    const sw = { "lat": 43.642331309589274, "lng": -79.40852005310057 }
    wrapper.instance().getBounds(ne,sw)
    console.log(wrapper.state())
    expect(wrapper.state().poisData).to.have.length(13);
  });  */

 
  it('Check marker are generated', () => {
       const wrapper = shallow(<MapContainer />);
       const mockPoints = {
        "pois": [
          {
            "center": {
              "lat": 43.6521219,
              "lon": -79.4031155
            },
            "id": "666d7080-af32-4108-a20e-c8b0077dcf22",
            "label": "658 DUNDAS ST W, TORONTO, ON, CANADA M5T1H9",
            "name": "CHRYSLER - BELLEVILLE"
          },
          {
            "center": {
              "lat": 43.6515611,
              "lon": -79.3610887
            },
            "id": "b9e06348-2b3e-46a2-818c-05d0515275f7",
            "label": "321 FRONT ST E, TORONTO, ON, CANADA M5A1G3",
            "name": "CHRYSLER DODGE TORONTO SALES LTD"
          },
          {
            "center": {
              "lat": 43.6530091,
              "lon": -79.3592481
            },
            "id": "c70b23b4-241b-4ceb-8867-b981663ed5c9",
            "label": "47 EASTERN AVENUE, TORONTO, ON, CANADA M5A1H1",
            "name": "HONDA DOWNTOWN"
          }
        ]
      }
      wrapper.setState({ poisData: mockPoints });
      expect(wrapper.find('Marker')).to.have.length(3);
     }); 
});
