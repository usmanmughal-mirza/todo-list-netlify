import React from 'react';
import { useContext } from 'react';
import {TodoContext} from "../context/Todocontext";
import {FiEdit} from "react-icons/fi";
// import {TodoContext} from "../context/Todocontext";

const Todo = ({todo}) => {
  const {setIsOpen,todoitem,setTodoItem}=useContext(TodoContext);

   function openModal() {
    setIsOpen(true);
    setTodoItem(todo);
  }

  return (
    <>
    
    
    <div className='todo' key={todo._id}>
        <li className={todo.completed ? "todo-item completed":"todo-item"}>{todo.todo} </li>
        <button className={todo.completed ?`complete-btn`:"complete-btn pending"}  disabled >
          {todo.completed ? "completed":"pending"}
        </button>
        <button className="trash-btn" onClick={openModal}>
          <FiEdit className='trash-btn-icon' />
        </button>
     </div>
     </>
  )
}

export default Todo