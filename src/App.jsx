import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const API_URL = 'http://localhost:3000/tasks';

  // Хук useEffect: завантажує дані з сервера один раз при старті додатка
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Помилка завантаження даних:", err));
  }, []);

  // Operation 1: Додавання задачі (POST)
  const addTask = (title) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    .then(res => res.json())
    .then(newTask => {
      setTasks([...tasks, newTask]); // Оновлення інтерфейсу отриманими з сервера даними
    })
    .catch(err => console.error("Помилка додавання:", err));
  };

  // Operation 2: Видалення задачі (DELETE)
  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    })
    .catch(err => console.error("Помилка видалення:", err));
  };

  // Operation 3: Редагування задачі (PUT)
  const updateTask = (id, updatedTitle) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: updatedTitle })
    })
    .then(res => res.json())
    .then(updatedTask => {
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    })
    .catch(err => console.error("Помилка оновлення:", err));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Fullstack Todo (Express + React)</h1>
        <p>Практична робота: Зв'язок клієнт-сервер</p>
      </header>
      <main>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </main>
    </div>
  );
}

export default App;