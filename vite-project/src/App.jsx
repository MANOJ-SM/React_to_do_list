// src/components/App.jsx
import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './styles.css';

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleEditTodo = (index, newTodo) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = newTodo;
        setTodos(updatedTodos);
    };

    return (
        <div className="app">
            <Header onAddTodo={handleAddTodo} /> {/* Pass handleAddTodo as a prop */}
            <ToDoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        </div>
    );
}

export default App;
