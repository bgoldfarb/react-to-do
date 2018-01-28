import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import List from '../src/List'

Enzyme.configure({ adapter: new Adapter() })

const ListMock = ['item1', 'item2']


describe('The tests for the to do list', () => {


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

it('has the correct div', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.user-input').exists()).to.equal(true)
})

it('has the correct dom elements', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.containsAllMatchingElements([
  <div>
        <input />
        <button> Submit </button>
        <List />
  </div>
  ])).to.equal(true)
})


})
