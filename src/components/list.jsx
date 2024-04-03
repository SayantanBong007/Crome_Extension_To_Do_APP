import React from "react";

function ToDoItem(props) {
  return (
    // Wrapper div for each to-do item
    <div
      onClick={() => {
        // Call the function passed as prop to mark the item as completed
        props.completed(props.id);
      }}
    >
      {/* To-do item text */}
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
