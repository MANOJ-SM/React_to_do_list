import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]); // State to hold the to-do items

  return (
    <div className="app">  {/* Basic styling - you'll improve this */}
      <Header />
      <ToDoList todos={todos} /> {/* Pass todos as props */}
    </div>
  );
}

export default App;