import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const Container = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <Container>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </Container>
  );
};

export default TodoList;
