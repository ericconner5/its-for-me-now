import React, { Component } from 'react';
import TaskList from './TaskList';
import './App.css';

const masterTaskList = [
  {
    description: 'get some shoes',
    important: false,
    id: 0
  }, {
    description: 'buy some food',
    important: false,
    id: 1
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTaskList
    };
    this.toggleImportant = this.toggleImportant.bind(this);
  }

  toggleImportant(key) {

    let newMasterTaskList = this.state.masterTaskList.slice();
    newMasterTaskList = JSON.parse(JSON.stringify(newMasterTaskList));
    console.log(newMasterTaskList[0] === this.state.masterTaskList[0]);
    // let newTask = Object.assign({}, newMasterTaskList[key]);
    // const newImportantValue = !newTask.important;
    // newTask.important = newImportantValue;
    // newMasterTaskList[key] = newTask;
    // this.setState({
    //   masterTaskList: newMasterTaskList
    // });

  }

  render() {
    return (
      <div className="App">
        <TaskList
          taskList={this.state.masterTaskList}
          toggleImportant={this.toggleImportant}/>
      </div>
    );
  }
}

export default App;
