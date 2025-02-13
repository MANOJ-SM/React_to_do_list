// src/components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onEdit }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDoItem key={index} todo={todo} onDelete={() => onDelete(index)} onEdit={(newTodo) => onEdit(index, newTodo)} />
            ))}
        </ul>
    );
}

export default ToDoList;