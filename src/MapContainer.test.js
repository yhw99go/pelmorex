import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import MapContainer from './MapContainer';

describe('MapContainer', () => {

 it('on map click window box status change', () => {
    const wrapper = shallow(<MapContainer />);
    wrapper.setState({ showingInfoWindow: true });
    wrapper.instance().onMapClicked()
    expect(wrapper.state().showingInfoWindow).toBe(false);
  }); 


});
