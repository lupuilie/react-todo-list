import React from 'react'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'

const Todo = ({ id, text, completed, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <li className={`todo-item row ${completed ? 'completed' : ''}`}>
            <span>{text}</span>
            <div className="buttons">
                <button
                    className="done"
                    onClick={completeHandler}
                >
                    <FaCheck size="1.2em" style={{ display: "flex" }} />
                </button>
                <button
                    className="remove"
                    onClick={deleteHandler}
                >
                    <FaTrashAlt size="1.2em" style={{ display: "flex" }} />
                </button>
            </div>
        </li>
    );
}

export default Todo
