import React, { useState } from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(task, editedDescription);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div className="item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick} className="button">
            Save
          </button>
        </>
      ) : (
        <>
          <div className="item-description">{task.description}</div>
          <button onClick={handleEditClick} className="button">
            Edit
          </button>
          <button onClick={() => onDelete(task.id)} className="button">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
