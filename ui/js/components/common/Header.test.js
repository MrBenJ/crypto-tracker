/* global
    expect
    it
    describe
*/

import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/common/Header';

describe('<Header> Component Tests', () => {
    const setupHeader = () => shallow(<Header />);

    it('Renders without exploding', () => {
        const HeaderWrapper = setupHeader();
        expect(HeaderWrapper).toBeTruthy();
    });

    it('Renders a link to the homepage', () => {
        const HeaderWrapper = setupHeader();
        expect(HeaderWrapper.find('Link')).toHaveLength(2);
    });
});
