import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <ul className="todo-list">
            {
                filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))
            }

        </ul>
    )
}

export default TodoList
