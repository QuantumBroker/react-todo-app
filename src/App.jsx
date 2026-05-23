import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // Використовується хук useState для динамічного списку задач
  const [tasks, setTasks] = useState([
    { id: 1, title: "Вивчити базові концепції React" },
    { id: 2, title: "Розібратися з React Hooks (useState)" }
  ]);

  // Функція для додавання нової задачі
  const addTask = (title) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = {
      id: newId,
      title: title
    };
    setTasks([...tasks, newTask]); // Хук оновлення стану (спред-оператор)
  };

  // Функція для видалення задачі за її id
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks); // Хук оновлення стану
  };

  return (
    <div className="app-container">
      <header>
        <h1>Мій Динамічний Todo</h1>
        <p>Практична робота: React Hooks</p>
      </header>
      <main>
        {/* Передається функцію додавання у форму */}
        <TodoForm addTask={addTask} />
        
        {/* Передається список та функцію видалення в компонент списку */}
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default App;