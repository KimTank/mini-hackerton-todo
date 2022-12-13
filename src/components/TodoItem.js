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

const DelBtn = styled.button`
  height: auto;
  width: 20%;
`

const TodoItem = ({ item }) => {

  const handleEditItem = (e) => alert(`${item.name} : ${item.cont} 수정`)
  const handleDelItem = (e) => alert(`${item.name} 삭제`);

  return (
    <>
      <Item onClick={() => handleEditItem()}>
        <TextContainer>
          <Text>
            <strong>{item.name}</strong>
          </Text>
          <Text>{item.cont}</Text>
        </TextContainer>
          <DelBtn onClick={() => handleDelItem()}>삭제</DelBtn>
      </Item>
    </>
  );
};

export default TodoItem;
