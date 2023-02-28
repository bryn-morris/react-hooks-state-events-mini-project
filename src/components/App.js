import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

////////////////////////////////////////////////////////////////////////
//////////////////// Deliverable #1 - TaskList
////////////////////////////////////////////////////////////////////////

  const [taskData, setTaskData] = useState(TASKS)
  const [selectedButton, setSelectedButton] = useState()
  const [newTaskObj,setNewTaskObj] = useState({})

  function handleDelete (parentDiv) {
    const newArray = [...taskData].filter(eachObj => eachObj !== parentDiv)
    setTaskData(newArray);
  }

////////////////////////////////////////////////////////////////////////
//////////////////// Deliverable #2 - Category Filter - Selected
////////////////////////////////////////////////////////////////////////

  function changeSelectedButton (clickedButton) {
    if(selectedButton === undefined){
      setSelectedButton(clickedButton)
      clickedButton.classList.add("selected")
    } else {
      selectedButton.classList.remove("selected")
      setSelectedButton(clickedButton)
      clickedButton.classList.add("selected")
    }
  }

////////////////////////////////////////////////////////////////////////
//////////////////// Deliverable #2 - Category Filter - Filter
////////////////////////////////////////////////////////////////////////

  const filteredTasks = [...taskData].filter((eachTaskObj)=>{
    if (selectedButton === undefined || selectedButton.value === "All") {
      return true
    } else {
      return selectedButton.value === eachTaskObj.category
    }
  })

  function handleNewTaskSubmission (newObj) {

    setTaskData([...taskData, newObj])
    setNewTaskObj({})
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = {CATEGORIES}
        changeSelectedButton = {changeSelectedButton}
      />
      <NewTaskForm
        categories = {CATEGORIES}
        handleNewTaskSubmission = {handleNewTaskSubmission}
        newTaskObj = {newTaskObj}
      />
      <TaskList 
        taskData = {filteredTasks} 
        handleDelete = {handleDelete}
      />
    </div>
  );
}

export default App;
