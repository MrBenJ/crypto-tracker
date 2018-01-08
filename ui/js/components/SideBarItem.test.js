/* global
    describe
    it
    expect
    spyOn
*/
import React from 'react';
import { shallow } from 'enzyme';

import { SideBarItem } from './SideBarItem';

describe('<SideBarItem> tests', () => {
    const createWrapper = props => shallow(<SideBarItem {...props} />);
    const minimumProps = {
        coin: 'ltc',
        prices: [],
        trackerActions: {
            addCoin: () => {},
            removeCoin: () => {}
        },
        priceActions: {
            getPrice: () => {}
        }
    };

    it('renders without crashing', () => {
        const wrapper = createWrapper(minimumProps);
        expect(wrapper).toBeTruthy();
    });

    xit('runs getPrice() if the price is not in the redux store', () => {
        
        const wrapper = createWrapper(minimumProps);
        const instance = wrapper.instance();
        spyOn(instance.props.priceActions, 'getPrice');
        expect(instance.props.priceActions.getPrice).toHaveBeenCalled();
        
    });


});