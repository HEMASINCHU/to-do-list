import React from "react";
import TaskItem from "./Taskitem";

const AllTodo = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2>All Todo</h2>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTodo;
