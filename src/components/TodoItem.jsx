import React from 'react';

function TodoItem({ task, deleteTask }) {
  return (
    <li className="todo-item">
      <span className="task-id">#{task.id}</span>
      <span className="task-title">{task.title}</span>
      <button 
        onClick={() => deleteTask(task.id)} 
        className="delete-button"
        title="Видалити задачу"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;