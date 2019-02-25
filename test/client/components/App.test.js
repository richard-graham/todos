import React from 'react'
import { shallow, mount } from 'enzyme'

import {App} from '../../../client/components/App'

test('App is working', () => {
    // Arrange
    const expected = 'Welcome to my Todos:'

    //Act
    const wrapper = shallow(<App /> )
    const actual = wrapper.find('h1').text

    //Assert
    expect(actual).toBe(expected)
})