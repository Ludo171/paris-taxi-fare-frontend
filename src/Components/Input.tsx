import React from "react";
import { useState } from "react";
import "./Input.scss";


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
    <div className="styled-input">
      {label ? <label>{label}</label> : null}
      <input type="text" value={text} onChange={update} />
    </div>
  );
};

export default Input;
