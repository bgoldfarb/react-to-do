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


it('has the correct div', () => {
    const wrapper = shallow(<CheckBox />)
    expect(wrapper.find('.check-box').exists()).to.equal(true)
  })

  it('has the correct dom elements', () => {
    const wrapper = shallow(<CheckBox />)
    expect(wrapper.containsAllMatchingElements([
     
    <div>
      <form>
      <span>
        <input/>
        <label>Checkbox</label>
      </span>
        </form>
    </div>
    ])).to.equal(true)
  })
  


})