import React from 'react';

const { shallow } = require('enzyme');
const { Listado } = require('../../../components/wolox/Listado');

describe('Pruebas en <Listado />', () => {

    const techMock = {
        logo: 'test',
        tech: 'test',
        year: 'test',
        author: 'test',
        license: 'test',
        language: 'test',
        type: 'test'
    }
    const wrapper = shallow(<Listado tech={techMock} />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.listado__tecnologia').exists()).toBe(true);
    });


})
