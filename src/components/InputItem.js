import React, { forwardRef, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  text-align: left;
`;

const TextArea = styled.textarea`
  height: 100%;
  resize: none;
  border: none;
`;

const InputItem = forwardRef(({ label, content, isTextarea }, ref) => {
  const [value, setValue] = useState(content);
  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Label>{label}</Label>
      {isTextarea ? (
        <TextArea
          ref={ref}
          value={value}
          onChange={(e) => handleSetValue(e)}
        />
      ) : (
        <input ref={ref} value={value} onChange={(e) => handleSetValue(e)} />
      )}
    </>
  );
});

export default InputItem;
