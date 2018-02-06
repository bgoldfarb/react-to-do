import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import sinon ,{spy} from 'sinon'
import CheckBox from '../src/CheckBox'


Enzyme.configure({ adapter: new Adapter() })

describe('The tests for the to do list', () => {

    let wrapper;
    it('renders without crashing', () => {
        wrapper = shallow(<CheckBox/>)
        expect(wrapper.find(CheckBox)).to.exist;
    })


})