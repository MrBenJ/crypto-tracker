import React from 'react';
import { shallow } from 'enzyme';
import CoinBadge from './CoinBadge';

describe('<CoinBadge> tests', () => {

    const createWrapper = props => shallow(<CoinBadge {...props} />);

    it('can have a classname added in', () => {
        const wrapper = createWrapper({ className: "my-class", name: 'btc'});
        expect(wrapper.find('.my-class')).toHaveLength(1);
    });

    it('disables onClick if disable=true', () => {
        const wrapper = createWrapper({
            name: 'ltc',
            className: 'top-class',
            onClick: () => {},
            disable: true
        });
        const rootDiv = wrapper.find('.top-class');
        expect(rootDiv.props().onClick).toBeFalsy();
    });
});