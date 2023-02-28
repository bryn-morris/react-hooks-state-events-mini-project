import React from "react";
import Option from "./Option"

function NewTaskForm({categories}) {

  const trimmedCategories = categories.filter((eachObj) => eachObj !== "All")
  trimmedCategories.unshift("")


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {trimmedCategories.map((eachCategory)=>{
            return <Option category = {eachCategory}/>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
