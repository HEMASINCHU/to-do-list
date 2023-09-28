import React from "react";
import TaskItem from "./Taskitem"

const AllComplete = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2>All Complete</h2>
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

export default AllComplete;
