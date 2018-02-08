import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import List from '../src/List'
import sinon ,{spy} from 'sinon'


Enzyme.configure({ adapter: new Adapter() })

const ListMock = ['item1']
const handlerStub = spy()
const moveToCompleteStub = spy()


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
//test
//test
it('has the correct div', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.user-input').exists()).to.equal(true)
})

it('makes sure all list items are removed', () => {
  const wrapper = shallow(<App />)
  const wrapper2 = mount(<List toDoListItems={ListMock} />)
  wrapper.find('#btn').simulate('click');
  wrapper2.unmount()
  expect(wrapper.state().toDoListItems).to.deep.equal([])
})


it('makes sure the handler method is called', () => {
  const wrapper = shallow(<App />)
  const wrapper2 = mount(<List toDoListItems={ListMock} handler={handlerStub} />)
  wrapper2.find('.remove-item-btn').simulate('click');
  expect(wrapper.state().toDoListItems).to.deep.equal([])
})

it('makes sure the moveToComplete method is called', () => {
  const wrapper = shallow(<App />)
  const wrapper2 = mount(<List toDoListItems={ListMock} handler={handlerStub} moveToComplete={moveToCompleteStub} />)
  wrapper2.find('.move-item-done').simulate('click');
  expect(wrapper.state().completedItems).to.deep.equal([])
  wrapper2.unmount()
})




})

