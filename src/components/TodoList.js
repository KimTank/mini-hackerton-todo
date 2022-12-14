import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.ul`
  background-color: #88A47C;
  height: 50%;
  width: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const TodoList = ({todoData, delTodo, updTodo}) => {
  return (
    <>
      <List>
        {todoData.map((item, idx) => <TodoItem item={item} key={item.uid} delTodo={delTodo} updTodo={updTodo}/>)}
      </List>
    </>
  );
};

export default TodoList;