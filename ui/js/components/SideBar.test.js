/* global
    expect
    it
    describe
*/

import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from './SideBar';

describe('<SideBar> Tests', () => {

    const createShallowWrapper = props => shallow(<SideBar {...props}/>)
    
    it('renders without crashing', () => {
        const wrapper = createShallowWrapper();
        expect(wrapper).toBeTruthy();
    })

    it('Adds a className if the prop is passed in', () => {
        const wrapper = createShallowWrapper(
            { className: 'my-special-class' }
        );
        expect(wrapper.find('.my-special-class')).toHaveLength(1);
    });

    it('Renders no-track state if nothing is tracked', () => {
        const wrapper = createShallowWrapper();
        expect(wrapper.find('.no-track-zero-state')).toHaveLength(1);
    });

    it('Renders <SideBarItems> if coins are tracked', () => {
        const wrapper = createShallowWrapper({
            tracker: ['btc', 'eth']
        });
        expect(wrapper.find('.sidebar-items-container')).toHaveLength(1);
        
    });
});
