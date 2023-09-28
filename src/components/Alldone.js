import React from "react";
import TaskItem from "./Taskitem"

const AllDone = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="container">
      <h2>All Done</h2>
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

export default AllDone;
