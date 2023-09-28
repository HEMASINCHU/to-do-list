import React, { useState } from "react";
import AllDone from "./Alldone";
import AllTodo from "./Alltodo";
import TaskForm from "./Task";
import AllComplete from "./Allcomplete";

const TaskStatus = {
  IN_PROGRESS: "inprogress",
  TODO: "todo",
  COMPLETE: "complete",
};

const createTask = (id, description, status) => ({
  id,
  description,
  status: status || TaskStatus.TODO,
});

function ToDoList() {
  const [list, setList] = useState([
    createTask(1, "Task 1", TaskStatus.TODO),
    createTask(2, "Task 2", TaskStatus.COMPLETE),
    createTask(3, "Task 3", TaskStatus.TODO),
    createTask(4, "Task 4", TaskStatus.COMPLETE),
  ]);

  const [filter, setFilter] = useState(TaskStatus.TODO);

  const handleAddTask = (description) => {
    const newTask = createTask(list.length + 1, description);
    setList((prev) => [...prev, newTask]);
  };

  const handleEditTask = (task, editedDescription) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, description: editedDescription } : item
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setList((prev) => prev.filter((task) => task.id !== taskId));
  };

  const filteredList = list.filter((task) => {
    if (filter === TaskStatus.IN_PROGRESS) {
      return task.status === TaskStatus.COMPLETE;
    } else if (filter === TaskStatus.TODO) {
      return task.status === TaskStatus.TODO;
    } else if (filter === TaskStatus.COMPLETE) {
      return task.status === TaskStatus.COMPLETE;
    }
    return true;
  });

  return (
    <div className="todolist">
      <h1 style={{ textAlign: "center" }}>To-do list</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="filter-buttons">
        <button
          className="filter-btn"
          onClick={() => setFilter(TaskStatus.IN_PROGRESS)}
        >
          All Done
        </button>
        <button
          className="filter-btn"
          onClick={() => setFilter(TaskStatus.COMPLETE)}
        >
          All Complete
        </button>
        <button
          className="filter-btn"
          onClick={() => setFilter(TaskStatus.TODO)}
        >
          All Todo
        </button>
      </div>
      {filter === TaskStatus.COMPLETE && (
        <AllComplete
          tasks={filteredList}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      )}
      {filter === TaskStatus.TODO && (
        <AllTodo
          tasks={filteredList}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      )}
      {filter === TaskStatus.IN_PROGRESS && (
        <AllDone
          tasks={filteredList}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default ToDoList;
