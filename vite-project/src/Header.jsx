// src/components/Header.jsx
import React, { useState } from 'react';

function Header({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <header>
      <h1>To-Do List</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter a task" />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
}

export default Header;