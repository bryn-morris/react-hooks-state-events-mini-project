import React from "react";

function NewTaskForm({categories, handleNewTaskSubmission, newTaskObj}) {

  const trimmedCategories = categories.filter((eachObj) => eachObj !== "All")
  trimmedCategories.unshift("")

  function onNewTaskSubmit (e) {
    e.preventDefault()
  
    handleNewTaskSubmission(
      {
        text: e.target.text.value,
        category: e.target.category.value
      })
  } 


  return (
    <form className="new-task-form" onSubmit = {onNewTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" value = {newTaskObj.text}/>
      </label>
      <label>
        Category
        <select name="category">
          {trimmedCategories.map((eachCategory)=>{
            return (
              <option
                key = {eachCategory}
                value = {newTaskObj.category}
              >{eachCategory}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
