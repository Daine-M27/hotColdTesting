import React from 'react';
import {shallow} from 'enzyme';
import GuessForm from './guess-form'

describe('<GuessForm />', () => {
    it('Renders the guess count component', () => {
        shallow(<GuessForm/>);
    })
});