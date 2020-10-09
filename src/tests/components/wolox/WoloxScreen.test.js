/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';
import WoloxScreen from '../../../components/wolox/WoloxScreen';

jest.mock('react', () => {
    const ActualReact = require.requireActual('react');
    return {
        ...ActualReact,
        useContext: () => ({ user: {} }),
    };
});

describe('Pruebas en <WoloxScreen />', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<WoloxScreen />);

        expect(wrapper).toMatchSnapshot();
    });

})
