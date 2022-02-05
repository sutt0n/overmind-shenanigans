import React from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <Todos />
      </header>
    </div>
  );
}

export default App;
