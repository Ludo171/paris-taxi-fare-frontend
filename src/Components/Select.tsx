import React from "react";
import "./Select.scss";

interface IProps {
  label?: string;
  items: { label: string; value: string; }[];
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
}

const Select: React.FC<IProps> = ({ label, items, value = "", onChange }: IProps) => {
  const update = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    onChange(event.target.value);
  };

  return (
    <div className="styled-select">
      {label ? <label>{label}</label> : null}
      <select value={value} onChange={update}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
