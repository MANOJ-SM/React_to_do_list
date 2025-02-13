// src/components/ToDoItem.jsx
import React, { useState } from 'react';

function ToDoItem({ todo, onEdit, onDelete }) {
  const [completed, setCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleComplete = () => {
    setCompleted(!completed);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const handleEditSave = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={completed} onChange={handleComplete} />
      {isEditing ? (
        <>
          <input type="text" value={editedTodo} onChange={handleEditChange} />
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDoItem;