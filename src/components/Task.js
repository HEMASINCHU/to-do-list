import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput("");
  };

  return (
    <form className="container task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" className="button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
