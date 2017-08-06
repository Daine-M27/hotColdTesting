
import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count'

describe('<GuessCount />', () => {
    it('Renders the guess count component', () => {
        shallow(<GuessCount/>);
    })

    it('Renders the number of guesses', () => {
        const countNumber = 27;
        const wrapper = shallow(<GuessCount count={countNumber}/>);
        expect(wrapper.text()).toEqual(`Guess #${countNumber}!`)
    })
});