import React from "react";
import styled from "styled-components";

const StyledSubmitButton = styled.button`
  font-size: large;
  border-color: #0000ff;
  border-width: 1px;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: #0000ff;
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: white;
    border-color: #5555aa;
  }
`;

interface IProps {
  label: string;
  onClick: () => void;
}

const SubmitButton: React.FC<IProps> = ({ label, onClick }: IProps) => {
  return (
    <StyledSubmitButton onClick={onClick}>
      {label}
    </StyledSubmitButton>
  );
};

export default SubmitButton;
