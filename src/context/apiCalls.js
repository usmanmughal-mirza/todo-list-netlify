import {START__LOADING,END__LOADING,CREATE__TODO,UPDATE__TODO,GET__TODOS,DELETE__TODO,
ERROR} from "./constants";
import {getTodosSuccess,startLoading,endLoading,createTodoSuccess,updateTodoSuccess,deleteTodoSuccess,errorTodosSuccess} from "./actions";
import axios from "axios";

// local development ----------------------
// const url="http://localhost:8000/api";
// production -------------CYCLIC
// const url="https://wandering-robe-duck.cyclic.app/api";
// HEROKU 
const url="https://todo-list-rest--api.herokuapp.com/api";


// FETCH TODOS  ALL / COMPLETED / UNCOMPLETED -----------------

export const getTodos =async(dispatch,todostate) =>{
dispatch(startLoading());
// console.log("at gettodos");
// console.log(statustodos);
try {
    const res=await axios.get(`${url}/todos?todostate=${todostate}`);

    dispatch(getTodosSuccess(res?.data));

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}

// CREATE TODO --------------------------------------------------

export const createTodo =async(dispatch,todo) =>{
dispatch(startLoading());
try {
    const res=await axios.post(`${url}/todo`,todo);
   
    dispatch(createTodoSuccess(res?.data));
   
    dispatch(endLoading());

} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}

// UPDATE TODO -----------------------------------------
export const updateTodo =async(dispatch,todo,id) =>{
dispatch(startLoading());

try {
    const res=await axios.put(`${url}/todo/${id}`,todo);
   
    dispatch(updateTodoSuccess(res?.data));

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}


// DELETE TODO -------------------------------------------

export const deleteTodo =async(dispatch,id) =>{
dispatch(startLoading());
// console.log("at delete");
// console.log(id);

try {
    await axios.delete(`${url}/todo/${id}`);
    dispatch(deleteTodoSuccess(id));

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}


