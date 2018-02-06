import React, { Component } from 'react';
import './App.css';
import List from '../src/List'

class App extends Component {

constructor(props){
  super(props)
    this.state = {
      value: '',
      toDoListItems: []
    }
  }

  handler = (items) => { this.setState({ toDoListItems: this.state.toDoListItems.filter((i) => i !== items)})}

  handleChange = (e) => { this.setState({ value: e.target.value })}

  handleSubmit = (e) => (this.state.value) ? this.setState({value: '', toDoListItems: [...this.state.toDoListItems, this.state.value]}) : e.preventDefault()
  
  removeAllItems = () => {this.setState({ value: '', toDoListItems: []})}





  render() {
    return (
      <div className = 'user-input'>
          <h1 id = 'title'> To Do List </h1>
          <input id="user-input-value" value = {this.state.value} onChange = {this.handleChange}/>
          <button id = 'submit-button' onClick ={this.handleSubmit}> Add </button>
          <div className='list-items'>
            <List toDoListItems = {this.state.toDoListItems} handler={this.handler}/>
          </div>
          <div className = 'remove-button'>
          <button id = 'btn'  onClick = {this.removeAllItems}> Remove All Items </button>
          </div>  
      </div>
     
    );
  }
  
}

export default App;
