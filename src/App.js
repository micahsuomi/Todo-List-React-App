import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="wrapper">
    <div className="App">
      <h1 className="app-header">Todo List React App</h1>
          <TodoList />
    </div>
    </div>
  );
}

export default App;
