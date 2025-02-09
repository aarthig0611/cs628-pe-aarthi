import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default ToDoList;