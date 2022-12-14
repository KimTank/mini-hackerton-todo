import React, { useRef } from "react";
import styled from "styled-components";
import InputItem from "./InputItem";

const InputContainer = styled.div`
  height: 80%;
  width: 100%;
  padding: 10px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
`;

const LABEL_NAME = "작성자";
const LABEL_CONT = "내용";

const EditItem = ({ item, updateTodo }) => {
  const nameRef = useRef(null);
  const contRef = useRef(null);

  const handleEditItem = (e) => {
    if(nameRef.current.value === '' || contRef.current.value === '')
      return alert('빈칸은 들어갈수없어요');
    item.name = nameRef.current.value;
    item.cont = contRef.current.value;
    updateTodo(item);
  };
  return (
    <InputContainer>
      <InputItem label={LABEL_NAME} ref={nameRef} content={item.name}/>
      <InputItem label={LABEL_CONT} ref={contRef} content={item.cont} isTextarea={true} />
      <button onClick={() => handleEditItem()}>수정</button>
    </InputContainer>
  );
};

export default EditItem;
