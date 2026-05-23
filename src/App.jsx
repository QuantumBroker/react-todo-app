import React from 'react';
import TodoList from './components/TodoList';

function App() {
  // Список задач є константою
  const tasks = [
    { id: 1, title: "Вивчити базові концепції React", completed: true },
    { id: 2, title: "Розібратися з React Props та Map", completed: true },
    { id: 3, title: "Здати практичну роботу викладачу", completed: false },
    { id: 4, title: "Написати базові стилі для Todo", completed: false }
  ];

  return (
    <div className="app-container">
      <header>
        <h1>Мій React Todo Список</h1>
        <p>Практична робота: Бібліотека React</p>
      </header>
      <main>
        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;