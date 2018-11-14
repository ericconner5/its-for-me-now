import React from "react";
import './Task.css';

function Task({ description, important }){
  return (
    <div className='task'>
      <h1>{description}</h1>
      <p>{important ? 'true' : 'false'}</p>
    </div>
  );
}

export default Task;
