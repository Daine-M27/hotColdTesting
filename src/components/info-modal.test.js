import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal'

describe('<InfoModal />', () => {
    it('Renders the InfoModal component', () => {
        shallow(<InfoModal />)
    })
    //same as any other button press shallow function to verify a call back
    it('Should close info modal when Info button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback} />);
        const link = wrapper.find('.close');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });



});