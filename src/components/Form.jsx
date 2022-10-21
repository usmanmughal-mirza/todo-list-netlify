import React from 'react'
import { useContext } from 'react';
import {TodoContext} from "../context/Todocontext";
import {createTodo,getTodos} from "../context/apiCalls";

const Form = () => {
   const {inputText,setInputText,dispatch}=useContext(TodoContext);

    const submitHandler =(e) =>{
        e.preventDefault();
        
        createTodo(dispatch,{
          todo:inputText
        });

        setInputText("");
    }

    const todosList =(e) =>{
      
      if(e.target.value==="completed"){
        getTodos(dispatch,e.target.value)
      }
      else if(e.target.value==="uncompleted"){
          getTodos(dispatch,e.target.value)
      }
      else {
          getTodos(dispatch,e.target.value)
      }
    }
  return (
      <form >
        <div>
      <input type="text" className="todo-input"
      value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className="todo-button" type="submit" 
      onClick={submitHandler} >
        <i className="fas fa-plus-square"></i>
      </button>
      </div>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={todosList}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form