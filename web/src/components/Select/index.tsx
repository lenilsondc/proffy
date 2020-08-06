import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...selectProps
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...selectProps}>
        <option value="" disabled selected hidden>
          Select an option
        </option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
