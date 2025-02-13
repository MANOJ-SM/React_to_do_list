import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ToDoItem({ todo, onEdit, onDelete }) {
    const [completed, setCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);

    const handleCompleteChange = (event) => { 
        setCompleted(event.target.checked); // access event.target.checked
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
        <li className="item">
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={handleCompleteChange} 
            />
            <span className={completed ? 'completed' : ''}>
                {isEditing ? (
                    <>
                        <input type="text" value={editedTodo} onChange={handleEditChange} />
                        <button onClick={handleEditSave} className="save">Save</button>
                    </>
                ) : (
                    todo
                )}
            </span>
            {!isEditing && <button onClick={handleEditClick} className="edit"><FontAwesomeIcon icon={faEdit} /></button>}
            <button onClick={onDelete} className="delete"><FontAwesomeIcon icon={faTrash} /></button>
        </li>
    );
}

export default ToDoItem;