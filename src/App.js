import React, { useState } from "react"
import "./App.css"
import Todo from "./components/Todo"
import FormTodo from "./components/FormTodo"

function App() {
  const [todos, setTodos] = useState([
    { text: "WORK" },
    { text: "SEARCH" },
    { text: "LIVE" },
  ])

  const addTodoHandler = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const deleteHandler = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <FormTodo onAdd={addTodoHandler} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          text={todo.text}
          delete={deleteHandler}
        />
      ))}
    </div>
  )
}

export default App
