import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">Список задач порожній.</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TodoList;