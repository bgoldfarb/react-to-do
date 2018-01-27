import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('has the correct state elements', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state().value).to.equal("")
  expect(wrapper.state().toDoListItems).to.deep.equal([])
})

it('has the correct dom elements', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.containsAllMatchingElements([
    <input />
  ])).to.equal(true)
})

