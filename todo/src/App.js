import React, { useReducer } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from './Components/TodoForm';
import {TodoContext} from './Context/TodoContext';
import TodoReducer from './Context/reducer';
import './App.css'
import Todos from './Components/Todos';


const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [])
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <h1>Context ToDo App</h1>
        <Todos/>
      <TodoForm/>
    </TodoContext.Provider>
  )
}


export default App;