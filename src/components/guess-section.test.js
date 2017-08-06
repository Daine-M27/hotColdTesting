import React from 'react';
import {shallow} from 'enzyme'
import GuessSection from './guess-section'

describe('<GuessSection />', () => {
    it('Renders the GuessSection component', () => {
        shallow(<GuessSection />);
    })

    it('Renders the feedback in h2', () => {
        const feedback = 'dainebramage';
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.text()).toEqual(`${feedback}<GuessForm />`)
    })
});