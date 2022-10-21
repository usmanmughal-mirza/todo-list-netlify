import React, { useContext } from 'react'
import { createContext } from 'react'
import Todo from './Todo';
import {TodoContext} from "../context/Todocontext";
import {Puff} from "react-loader-spinner";

const TodoList = () => {
  const {todos,isFetching,error}= useContext(TodoContext);

  return (
    <div className='todo-container'>
        <ul className="todo-list">
          {isFetching ? (
            <>
        <Puff
  height="180"
  width="180"
  radisu={1}
  color="#4fa94d" 
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
            
            </>
          ):(
            <>
              {todos.map( (todo) =>(
            <Todo key={todo._id} todo={todo} />
          ))}
            </>
          )}
        
        </ul>
    </div>
  )
}

export default TodoList