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

it('has the correct div', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.user-input').exists()).to.equal(true)
})

it('has the correct dom elements', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.containsAllMatchingElements([
   
  <div>
     <h1> To Do List </h1>
        <input />
        <button> Add </button>
        <div>
        <List />
        </div>
        <div>
          <button> Remove All Items </button>
        </div>
  </div>
  ])).to.equal(true)
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
  console.log(wrapper.state().toDoListItems)
  wrapper2.find('.remove-item-btn').simulate('click');
  expect(wrapper.state().toDoListItems).to.deep.equal([])

})



})

