import React, { Component } from 'react';
import './App.css';
import List from '../src/List'

class App extends Component {

constructor(props){
  super(props)
    this.state = {
      value: '',
      toDoListItems: [],
      completedItems: []
    }
  }

  handler = (items) => { this.setState({ toDoListItems: this.state.toDoListItems.filter((i) => i !== items)})}

  moveToComplete = (items) => {
    this.setState({
      completedItems: this.state.completedItems.concat(items) + ", "
    },
    this.handler(items)
  )}

  handleChange = (e) => { this.setState({ value: e.target.value })}

  handleSubmit = (e) => (this.state.value) ? this.setState({value: '', toDoListItems: [...this.state.toDoListItems, this.state.value]}) : e.preventDefault()
  
  removeAllItems = () => {this.setState({ value: '', toDoListItems: []})}

  addToCompletedItems = () => {
    return(
      <ol> {this.state.completedItems}  </ol>
    )
  }
 
  render() {
    return (
      <div className = 'user-input'>
          <h1 id = 'title'> To Do List </h1>
          <input id="user-input-value" value = {this.state.value} onChange = {this.handleChange}/>
          <button id = 'submit-button' onClick ={this.handleSubmit}> Add </button>
          <div className='list-items'>
            <List toDoListItems = {this.state.toDoListItems} handler={this.handler} completedItems = {this.state.completedItems} moveToComplete={this.moveToComplete}/>
          </div>
          <div className = 'remove-button'>
          <button id = 'btn'  onClick = {this.removeAllItems}> Remove All Items </button>
          <h1> Completed Items </h1>
           {this.addToCompletedItems()}
          </div>  
      </div>
     
    );
  }
  
}

export default App;
