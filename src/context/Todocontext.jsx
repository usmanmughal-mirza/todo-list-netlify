import {createContext, useReducer, useState} from "react";
import {todoReducer} from "./reducers";

const INITIAL_STATE={
    todos:[],
    isFetching:false,
    error:null
}

export const TodoContext=createContext(INITIAL_STATE);

export const TodoContextProvider =({children}) =>{
    const [state,dispatch]=useReducer(todoReducer,INITIAL_STATE);
    const [inputText,setInputText]=useState("");
     const [modalIsOpen, setIsOpen] = useState(false);
     const [todoitem,setTodoItem]=useState(null);
    

    return(
        <TodoContext.Provider value={{
            todos:state.todos,
            isFetching:state.isFetching,
            error:state.error,
            inputText:inputText,
            setInputText:setInputText,
            modalIsOpen:modalIsOpen,
            setIsOpen:setIsOpen,
            todoitem:todoitem,
            setTodoItem:setTodoItem,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
    )
}
