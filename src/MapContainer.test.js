import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MapContainer from './MapContainer.js';

describe('MapContainer', () => {

 it('on map click window box state changed', () => {
    const props = {
        showingInfoWindow: false,
        poisData: [],
        activeMarker: {},
        selectedPlace: {},
      }
    const wrapper = mount(<MapContainer {...props} />)
    console.log(wrapper.instance())
  }); 


});
