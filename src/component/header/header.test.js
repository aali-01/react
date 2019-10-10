import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setup = (props={}) => {
    const component = shallow( <Header />);
    return component;
}
describe('Header component', () =>  {
    let component;
    beforeEach(()=> {
        component = setup();
    });
    it ('it should render without errors', () => {
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });
    it ('should render a logo',() => {
        const wrapper = component.find('.logoIMG');
        expect(wrapper.length).toBe(1);
    });
});
