import React, { Component } from 'react';
import TaskList from './TaskList';
import './App.css';

const masterTaskList = [
  {
    description: 'get some shoes',
    important: false
  }, {
    description: 'buy some food',
    important: false
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList
          taskList={masterTaskList}/>
      </div>
    );
  }
}

export default App;
