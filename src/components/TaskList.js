import React from "react";
import Task from "./Task";

function TaskList({taskData,handleDelete}) {

  return (
    <div className="tasks">
      {taskData.map((eachTaskObj)=>{      
        return (
        <Task 
          key = {eachTaskObj.name}
          taskObj = {eachTaskObj}
          handleDelete = {handleDelete}
        />)})}
    </div>
  );
}

export default TaskList;
