import React, { useState } from 'react';

function Header({ onAddTodo }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== '') {
            onAddTodo(newTodoText.trim());
            setNewTodoText('');
        }
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTodoClick();
        }
    };

    return (
        <header>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodoText}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTodoClick}>Add</button>
        </header>
    );
}

export default Header;