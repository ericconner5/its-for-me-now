import React from "react";
import './TaskList.css';
import Task from './Task';

function TaskList({ taskList }){
  return (
    <div className='taskList'>
      {taskList.map((task, index) =>
        (
          <div>
            {index === 0 ? <hr/> : null}
            <Task
              description={task.description}
              important={task.important} />
            <hr/>
          </div>
        )
      )}
    </div>
  );
}

export default TaskList;
