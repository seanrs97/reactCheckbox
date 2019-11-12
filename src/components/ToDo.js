import React from "react";

function boxChange(){
    console.log("box has been checked or unchecked")
}
function ToDo(prop){
return (
    <div className = "toDoItem">
        <input onChange = {() => prop.handleChange(prop.item.id)} 
        type = "checkbox" 
        checked={prop.item.completed}/>
        <p> {prop.item.text}</p>
    </div>
    )
}

export default ToDo