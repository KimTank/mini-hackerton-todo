import React, { useRef } from "react";
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

const AddItem = ({ addTodo }) => {
  const nameRef = useRef(null);
  const contRef = useRef(null);

  const handleAddItem = (e) => {
    if (nameRef.current.value === "" || contRef.current.value === "")
      return alert("빈값은 들어갈수없어요");
    addTodo(nameRef.current.value, contRef.current.value);
  };
  return (
    <InputContainer>
      <InputItem label={LABEL_NAME} ref={nameRef} />
      <InputItem label={LABEL_CONT} ref={contRef} isTextarea={true} />
      <button onClick={() => handleAddItem()}>등록</button>
    </InputContainer>
  );
};

export default AddItem;
