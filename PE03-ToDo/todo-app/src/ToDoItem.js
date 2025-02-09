import React from "react";

const ToDoItem = ({ task, deleteTask }) => {
  return (
    <div className="task-item">
      <span>{task}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default ToDoItem;