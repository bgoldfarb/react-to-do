import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import List from '../src/List'
import App from '../src/App'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import sinon ,{spy} from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)


Enzyme.configure({ adapter: new Adapter() })

const ListMock = ['item1']
const handlerStub = spy()

describe('The tests for the to do list', () => {
    
    let wrapper;
    it('renders without crashing', () => {
        wrapper = shallow(<List toDoListItems={ListMock} />)
        expect(wrapper.find(List)).to.exist;

    })

    it('makes sure individual list items are removed', () => {
        const wrapper = shallow(<App />)
        const wrapper2 = mount(<List toDoListItems={ListMock} handler={handlerStub} />)
        console.log(wrapper2.props().toDoListItems)
        wrapper2.find('.remove-item-btn').simulate('click');
        expect(handlerStub).to.have.been.called
      })
      



})