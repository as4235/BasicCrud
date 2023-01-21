import React from 'react';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const saveTodo = (input) => {
    if (input) {
      todos.push({ id: Math.floor(new Date()), todo: input });
      setTodos(todos)
      setInput("");
      console.log(todos)
    }
  }

  const deleteTodo = (el) => {
    for (let i = 0; i < todos.length; i++) {
      if (el === todos[i].id) {
        todos.splice(todos[i], 1)
        setTodos([...todos]);
        // setTodos(todos) won't re render since only one element in an array is deleted. Doing this way would change the whole array (tho we're setting it again with the same array value)
        console.log(todos)
      }
    }
  }

  const editTodo = (el) => {
    console.log(todos.filter(todo => el === todo.id)[0]).splice({ id: Math.floor(new Date()), todo: input })
  }

  return (
    <div className="App">
      <h1>todo app</h1>
      <div>{todos.length ? todos.map((todo, i) => { return <h2 key={i}>{i + 1}: {todo.todo}<button onClick={(e) => editTodo(todo.id)}>Edit</button><button onClick={(e) => deleteTodo(todo.id)}>Delete</button></h2> }) : <h2>add some</h2>}</div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => saveTodo(input)}>Submit</button>
    </div >
  );
}

export default App;
