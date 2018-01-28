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

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      value: '',
      toDoListItems: [...this.state.toDoListItems, this.state.value]
    })
  }



  render() {
    return (
      <div className = 'user-input'>
        
          <input value = {this.state.value} onChange = {this.handleChange}/>
          <button onClick = {this.handleSubmit}> Submit </button>
          <List toDoListItems = {this.state.toDoListItems} />
      </div>
     
    );
  }
  
}

export default App;
