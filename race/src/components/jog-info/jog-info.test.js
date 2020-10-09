import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JogInfo from './jog-info'

configure({
    adapter: new Adapter()
});

describe('<Jog-Info>', () => {
    it('Should render the race information based on the selected dates', () => {

        const wrapper = shallow(<JogInfo jog={{
            response: { jogs: [{ id: 3047, user_id: "3", distance: 1000, time: 1000, date: 1602222244 }] }
        }} />);

        expect(wrapper);
    });
});