import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "6em" }}>
      <Form todoHandler={todoHandler} />
      <List sx={{ marginTop: "2em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}

//bgcolor: "#4C3575"
