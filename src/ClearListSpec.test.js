import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import List from '../src/List'
import ClearList from '../src/ClearList'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import sinon from 'sinon'


Enzyme.configure({ adapter: new Adapter() })

describe('The tests for the to do list', () => {
    
    let wrapper;
    it('renders without crashing', () => {
        wrapper = shallow(<ClearList  />)
        expect(wrapper.find(ClearList)).to.exist;
    })



})