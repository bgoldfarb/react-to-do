import React, { Component } from 'react';
import './App.css';

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



  render() {
    return (
      <div className = 'user-input'>
        <input value = {this.state.value} onChange = {this.handleChange}/>

      </div>
     
    );
  }
}

export default App;
