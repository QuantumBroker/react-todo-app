import React, { useState } from 'react';

function TodoItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    if (!newTitle.trim()) return;
    updateTask(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <span className="task-id">#{task.id}</span>
      
      {isEditing ? (
        <input 
          type="text" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="item-buttons">
        {isEditing ? (
          <button onClick={handleUpdate} className="save-button">💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-button">✏️</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="delete-button">✕</button>
      </div>
    </li>
  );
}

export default TodoItem;