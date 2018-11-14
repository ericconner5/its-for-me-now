import React from "react";
import './Task.css';

function Task({ description, important, toggleImportant, id }){
  return (
    <div className='task'>
      <h1>{description}</h1>
    <p onClick={() => {toggleImportant(id)}}>{important ? 'important' : 'not important'}</p>
    </div>
  );
}

export default Task;
