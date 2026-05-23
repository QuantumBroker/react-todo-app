import React from 'react';

// Компонент приймає пропс 'task'
function TodoItem({ task }) {
  return (
    <li className="todo-item">
      <span className="task-id">#{task.id}</span>
      <span className="task-title">{task.title}</span>
      <span className={`task-status ${task.completed ? 'done' : 'pending'}`}>
        {task.completed ? '● Виконано' : '○ В процесі'}
      </span>
    </li>
  );
}

export default TodoItem;