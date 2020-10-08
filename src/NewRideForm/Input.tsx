import React from "react";
import { useState } from "react";
import styled from "styled-components"

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  label: {
    color: white;
    font-size: x-large;
  };
`;

interface IProps {
  label: string;
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
}

const Input: React.FC<IProps> = ({ label, value = "", onChange }: IProps) => {
  const [text, setText] = useState(value);

  const update = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
    onChange(event.target.value);
  };

  return (
    <StyledInput>
      {label ? <label>{label} :</label> : null}
      <input type="text" value={text} onChange={update} />
    </StyledInput>
  );
};

export default Input;
