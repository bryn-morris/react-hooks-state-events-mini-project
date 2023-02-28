import React from "react";

function Task({taskObj, handleDelete}) {

////////////////////////////////////////////////////////////////////////
//////////////////// Deliverable #2 - Task
////////////////////////////////////////////////////////////////////////


  function onDeleteClick (eventObj) {
    handleDelete(taskObj)
  }

  return (
    <div className="task">
      <div 
        className="label"
        value = {taskObj.category}
      >{taskObj.category}
      </div>
      <div 
        className="text" 
        value={taskObj.text}
      >{taskObj.text}
      </div>
      <button 
        className="delete" 
        value = {taskObj}
        onClick = {onDeleteClick}
      >X
      </button>
    </div>
  );
}

export default Task;
