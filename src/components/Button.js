import React from "react";

function Button ({category, changeSelectedButton}) {

    function onButtonClick (eventObj) {

        const selectedButton = eventObj.target

        changeSelectedButton(selectedButton);
         
    }

    return (
    <button 
        key = {category}
        onClick = {onButtonClick}
        value = {category}
    >{category}
    </button>)

}

export default Button