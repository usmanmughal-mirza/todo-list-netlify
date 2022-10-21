import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import Form from "./components/Form";
import TodoList from './components/TodoList';
import {getTodos} from "./context/apiCalls";
import {TodoContext} from "./context/Todocontext";
import Modal from "./components/Modal";



const App = () => {
  const {dispatch}=useContext(TodoContext);

  useEffect( () =>{
    getTodos(dispatch,"all");
  },[])
  
  return (
    <div className='app'>
      <header>
      <h1> Todo List</h1>
    
    </header>
      <p className='main-para'>
        Todo List Developed Using MERN Stack
      </p>
      <Form />
      <TodoList />
      <Modal />
      </div>
  )
}

export default App