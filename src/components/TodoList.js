import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.ul`
  background-color: #88A47C;
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const TodoList = ({data}) => {
  return (
    <>
      <List>
        {data.map((item, idx) => <TodoItem item={item} key={item.uid} />)}
      </List>
    </>
  );
};

export default TodoList;