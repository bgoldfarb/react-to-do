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

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.setState({
      value: '',
      toDoListItems: [...this.state.toDoListItems, this.state.value]
    })
    e.preventDefault()

  }

  removeItems = () => {
    this.setState({
      value: '',
      toDoListItems: []
    })
  }





  render() {
    return (
      <div className = 'user-input'>
          <h1> To Do List </h1>
          <input value = {this.state.value} onChange = {this.handleChange}/>
          <button onClick = {this.handleSubmit}> Submit </button>
          <div className='list-items'>
            <List toDoListItems = {this.state.toDoListItems}/>
          </div>
          <div className = 'remove-button'>
          <button id = 'btn'  onClick = {this.removeItems}> Remove Items </button>
          </div>
      </div>
     
    );
  }
  
}

export default App;
