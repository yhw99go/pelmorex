import React from 'react';
import { shallow } from 'enzyme';
import Poidetail from './Poidetail.js';
import renderer from 'react-test-renderer'

describe('Poidetail', () => {

    it('matches snapshot', () => {
        const props = {
            location: {
                state: {
                    label : 'test label'
                }
            }
        };
        const wrapper = renderer.create(<Poidetail  {...props}/>).toJSON()
        expect(wrapper).toMatchSnapshot()
    });

    it('get proper label', () => {
        const props = {
            location: {
                state: {
                    label : 'test label'
                }
            }
        };
        const wrapper = shallow(<Poidetail {...props} />)
        expect(wrapper.text()).toContain("test label");
    });
});
