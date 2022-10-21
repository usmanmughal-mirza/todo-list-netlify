import {GET__TODOS,CREATE__TODO,DELETE__TODO,UPDATE__TODO,START__LOADING,END__LOADING,
ERROR} from "./constants";


export const startLoading =() =>({
    type:START__LOADING
})

export const endLoading =() =>({
    type:END__LOADING
})

// GET TODOS 
export const getTodosSuccess =(todos) =>({
    type:GET__TODOS,
    payload:todos
})

// CREATE TODO ------------------------
export const createTodoSuccess =(todo) =>({
    type:CREATE__TODO,
    payload:todo
})

// UPDATE TODO ----------------------------
export const updateTodoSuccess =(todo) =>({
    type:UPDATE__TODO,
    payload:todo
})

// DELETE TODO ------------------------------
export const deleteTodoSuccess =(id) =>({
    type:DELETE__TODO,
    payload:id
})

// ERROR 
export const errorTodosSuccess =(error) =>({
    type:ERROR,
    payload:error
})