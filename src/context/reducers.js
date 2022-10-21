import {START__LOADING,END__LOADING,CREATE__TODO,UPDATE__TODO,DELETE__TODO,GET__TODOS, ERROR} from "./constants";


export const todoReducer =(state,action) =>{
    switch(action.type){
        case START__LOADING:
            return{
                ...state,
                isFetching:true
            }
        case END__LOADING:
            return{
                ...state,
                isFetching:false
            }
        case ERROR:
            return{
                ...state,
                error:action.payload,
                isFetching:false
            }    
        case GET__TODOS:
            return{
                ...state,
                todos:action.payload,
            }   
        case CREATE__TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }    
        case UPDATE__TODO:
            return{
                ...state,
                todos:state.todos.map( (todo) =>todo._id === action.payload._id ? action.payload:todo )
            }    
        case DELETE__TODO:
            return{
                ...state,
                todos:state.todos.filter( (todo) => todo._id !== action.payload )
            }    
            
         default:return state;
    }
}