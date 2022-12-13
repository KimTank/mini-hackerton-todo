import React from "react";
import styled from "styled-components";

const Label = styled.label`
  text-align: left;
`;

const TextArea = styled.textarea`
  height: 100%;
  resize: none;
  border: none;
`;

const InputItem = ({label, isTextarea}) => {
  return (
    <>
        <Label>{label}</Label>
        {isTextarea ? <TextArea/> : <input/>}
    </>
  );
};

export default InputItem;