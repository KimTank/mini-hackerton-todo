import React from "react";
import styled from "styled-components";
import InputItem from "./InputItem";

const InputContainer = styled.div`
  height: 30%;
  width: 50%;
  padding: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
`;

const LABEL_NAME = "작성자";
const LABEL_CONT = "내용";

const AddItem = ({addTodo}) => {
  const handleAddItem = (e) => addTodo(1, 2);
  return (
    <InputContainer>
      <InputItem label={LABEL_NAME} />
      <InputItem label={LABEL_CONT} isTextarea={true} />
      <button onClick={() => handleAddItem()}>등록</button>
    </InputContainer>
  );
};

export default AddItem;
