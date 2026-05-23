import React from 'react';
import TodoItem from './TodoItem';

// Компонент приймає пропс 'tasks'
function TodoList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;