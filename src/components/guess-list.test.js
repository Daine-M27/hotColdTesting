import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list'

describe('<GuessList />', () => {
    it('Renders the GuessList component', () => {
        shallow(<GuessList guesses={[]} />);
    })

    it('renders a list of numbers', () => {
        const numbers = [27, 33, 96];
        const wrapper = shallow(<GuessList guesses={numbers} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(numbers.length);
        numbers.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        })

    })
});