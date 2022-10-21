import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css';
import {TodoContextProvider } from "./context/Todocontext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>
    <App />
    </TodoContextProvider>
  </React.StrictMode>
)
