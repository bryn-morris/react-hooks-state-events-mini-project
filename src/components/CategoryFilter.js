import React from "react";
import Button from "./Button"

function CategoryFilter({categories, changeSelectedButton}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(
    (eachCategory) => {return (
    <Button 
      key = {eachCategory} 
      category = {eachCategory}
      changeSelectedButton = {changeSelectedButton}
    />
    )})}
    </div>
  );
}

export default CategoryFilter;
