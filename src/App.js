import React from 'react';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [showUpdateView, setShowUpdateView] = useState(false);
  const [editId, setEditId] = useState("");
  const [todos, setTodos] = useState([]);

  const saveTodo = (input) => {
    if (input) {
      todos.push({ id: Math.floor(new Date()), todo: input });
      setTodos(todos)
      setInput("");
    }
  }

  const deleteTodo = (el) => {
    for (let i = 0; i < todos.length; i++) {
      if (el === todos[i].id) {
        todos.splice(todos[i], 1)
        setTodos([...todos]);
      }
    }
  }

  const editTodo = (id, input) => {
    setShowUpdateView(!showUpdateView)
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        todos[i].todo = input;
        setTodos([...todos]);
        setEditInput("")
      }
    }
  }

  return (
    <div className="App">
      <h1>todo app</h1>
      <div>{todos.length ? todos.map((todo, i) => {
        return <h2 key={i}>{i + 1}: {todo.todo}<button onClick={() => { setEditId(todo.id); setShowUpdateView(true) }}>Edit</button><button onClick={(e) => deleteTodo(todo.id)}>Delete</button></h2>
      }) : <h2>add some</h2>}</div>
      <input placeholder="Enter todo value" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => saveTodo(input)}>Submit</button>
      {
        showUpdateView ? <div>
          <input placeholder="Enter update value" value={editInput} onChange={e => setEditInput(e.target.value)} />
          <button onClick={() => editTodo(editId, editInput)}>Submit</button>
          <button onClick={() => setShowUpdateView(false)}>Cancel</button>
        </div> : ''
      }
    </div >
  );
}

export default App;
