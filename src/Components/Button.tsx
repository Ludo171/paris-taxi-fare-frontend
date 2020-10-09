import React from "react";
import "./Button.scss";

interface IProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ label, icon, onClick }: IProps) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {label}
      {icon ? icon : null}
    </button >
  );
};

export default Button;
