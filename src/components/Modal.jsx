import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {AiOutlineClose} from "react-icons/ai";
import {TodoContext} from "../context/Todocontext";
import {updateTodo,deleteTodo} from "../context/apiCalls";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function App() {
  let subtitle;
  const {modalIsOpen,setIsOpen,dispatch,todoitem}=useContext(TodoContext);
  const [inputText,setInputText]=useState("");


  // function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const completedTodo =(e) =>{
    e.preventDefault();

    const data={completed:true };
    updateTodo(dispatch,data,todoitem._id);

    setIsOpen(false);
  }

  const deletedTodo =(e) =>{
      e.preventDefault();
    deleteTodo(dispatch,todoitem._id);

    setIsOpen(false);
  }

  const updateTodoItem =(e) =>{
      e.preventDefault();
    if(inputText!==""){
 const data={todo:inputText}; 
    updateTodo(dispatch,data,todoitem._id);
    }
    setIsOpen(false);
  }

  return (
    <div className='todo-modal'>
    
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* close btn ------ */}
        <button onClick={closeModal} className="modal-closebtn"> <AiOutlineClose className="modal-closebtn-icon" /> </button>
      

        <form className='todo-modal-form' onSubmit={(e) =>e.preventDefault()}>
            <div className='todo-modal-form-input'>
          <input placeholder='todo' style={{color:"lightblue"}}  onChange={(e) => setInputText(e.target.value)} />
          </div>
          <div className='todo-modal-form-btncontainer'>
          <button className='todo-modal-btn' onClick={updateTodoItem} disabled={inputText === "" && true}>Update Todo  </button>
          <button className='todo-modal-btn' onClick={completedTodo}>Complete </button>
          <button className='todo-modal-btn' onClick={deletedTodo}>Delete</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;