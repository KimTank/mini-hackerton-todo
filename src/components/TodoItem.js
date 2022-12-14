import React from "react";
import styled from "styled-components";

const Item = styled.li`
  background-color: #e6e2c3;
  height: auto;
  width: auto;
  list-style: none;
  margin: 5px;
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  margin: 2px;
  display: flex;
  justify-items: flex-start;
`;

const TextContainer = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  height: auto;
  width: 10%;
`;

const TodoItem = ({ item, delTodo, openModal, setEditIdx, idx }) => {
  const handleEditItem = (e) => {
    setEditIdx(idx);
    openModal();
  };
  const handleDelItem = (e) => delTodo(item.uid);

  return (
    <>
      <Item>
        <TextContainer>
          <Text>
            <strong>{item.name}</strong>
          </Text>
          <Text>{item.cont}</Text>
        </TextContainer>
        <Btn onClick={() => handleEditItem()}>수정</Btn>
        <Btn onClick={() => handleDelItem()}>삭제</Btn>
      </Item>
    </>
  );
};

export default TodoItem;
