import React, { useContext, useState } from "react";
import {
  Form,
  FormGroup,
  InputGroupAddon,
  Input,
  InputGroup,
  Button,
} from "reactstrap";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";
import { v4 } from "uuid";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmission = e => {
    e.preventDefault()
    if (todoString === "") return alert("Please Enter Some Text");
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type:ADD_TODO,
      payload: todo
    })
    setTodoString("")
  };

  return (
    <div>
      <Form onSubmit={handleSubmission}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              placeholder="Enter Your ToDo"
              value={todoString} 
              onChange={e => setTodoString(e.target.value)}
            ></Input>
            <InputGroupAddon addonType="prepend">
              <Button color="warning">Add</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

export default TodoForm;
