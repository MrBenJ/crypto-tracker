/* global
    expect
    it
    describe
    spyOn
*/
import React from 'react';
import { shallow } from 'enzyme';
import { MainWindow } from './MainWindow';

describe('MainWindow tests', () => {
    const createWrapper = props => shallow(<MainWindow {...props} />);

    it('Renders without crashing', () => {
        const wrapper = createWrapper();
        expect(wrapper).toBeTruthy();
    });

    it('Shows a zero state with link to /track if no currencies are being tracked', () => {
        const wrapper = createWrapper();
        const link = wrapper.find('Link');
        expect(link.props().to).toBe('/track');
    });

    it('Shows instructions if there are currencies being tracked', () => {
        const wrapper = createWrapper({
            tracker: ['btc', 'arc']
        });
        const text = wrapper.find('.select-text');
        expect(text).toHaveLength(1);
    });

    it('Shows currency information and graph if a view is selected', () => {
        const wrapper = createWrapper({
            tracker: ['btc'],
            view: {
                name: 'Bitcoin',
                ticker: 'btc',
                value: 1222.22
            }
        });
        const graphItem = wrapper.find('canvas');
        expect(graphItem).toHaveLength(1);
    });

    it('fires off componentDidUpdate + renders a chart', () => {
        const wrapper = createWrapper({
            tracker: ['btc']
        });
        const instance = wrapper.instance();
        spyOn(instance, 'componentDidUpdate');

        // simulate view change
        instance.setState({
            view: {
                name: 'Bitcoin',
                ticker: 'btc',
                value: 1222.22
            }
        });
        expect(instance.componentDidUpdate).toHaveBeenCalled();
    });
});