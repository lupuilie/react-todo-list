import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, filter]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="container">
        <div className="row">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setFilter={setFilter}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>

  )
}

export default App
