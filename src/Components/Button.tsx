import React from "react";
import "./Button.scss";

interface IProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ label, onClick }: IProps) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
