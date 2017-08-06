import React from 'react';
import {shallow} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders the TopNav component', () => {
        shallow(<TopNav />)
    })

    it('Should start new game when new game button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
    // any time a button is pushed there will be a callback to look at for the test to function.
    // jest.fn() makes a spy to watch the callback function
    it('Should launch onInfo when Info button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});
