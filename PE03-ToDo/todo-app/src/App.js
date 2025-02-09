import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;