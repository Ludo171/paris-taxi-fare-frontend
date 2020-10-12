import React from "react";
import "./Input.scss";

interface IProps {
  label: string;
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({ label, value = "", onChange, placeholder }: IProps) => {

  const update = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    onChange(event.target.value);
  };

  return (
    <div className="styled-input-group">
      {label ? <span>{label}</span> : null}
      <input className="form-field" placeholder={placeholder} type="text" value={value} onChange={update} />
    </div>
  );
};

Input.defaultProps = {
  placeholder: "Value",
};

export default Input;
