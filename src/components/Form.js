import React from 'react'
import { BiPlus } from 'react-icons/bi'

const Form = ({inputText, setInputText, todos, setTodos,setFilter}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    
    const submitFormHandler = (e) => {
        e.preventDefault();

        if(inputText.length === 0) return

        setTodos([
            ...todos, {
                id: Math.ceil(Math.random() * 5000), 
                text: inputText,
                completed: false
            }
        ]);
        setInputText('')
    }

    const statusHandler = (e) => {
        setFilter(e.target.value)
    }


    return (
        <form onSubmit={submitFormHandler}>
            <input
                type="text"
                onChange={inputTextHandler}
                value={inputText}
            />
            <button><BiPlus style={{ display: "flex" }} /></button>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    )
}
export default Form
