import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Не додаємо порожніх задач

    addTask(value); // Виклик функції додавання
    setValue('');   // Очищення поля після додавання
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Введіть нову задачу..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">Додати</button>
    </form>
  );
}

export default TodoForm;