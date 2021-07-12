import { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import TodoList from './components/TodoList/TodoList';

function App() {
  //minimal app, state management done without redux
  const [search, setSearch] = useState("")

  const onSubmit = (value) => {
    setSearch(value)
  }
  return (
    <div className="App">
      <AppBar onSubmit={onSubmit} />
      <TodoList search={search} />
    </div>
  );
}

export default App;
