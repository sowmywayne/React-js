import React, { useContext } from "react";
import { ListGroupItem } from "reactstrap";
import { TodoContext } from "../Context/TodoContext";
import {FiDelete} from 'react-icons/fi'
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos.length)
  return (
    <div className="items-container">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            onClick = {
              () => {
                dispatch({
                  type: REMOVE_TODO,
                  payload: todo.id
                })
              }
            }
            className="float-right"
          >
          <FiDelete/>
          </span>
        </ListGroupItem>
      ))}
    </div>
  );
};

export default Todos;
