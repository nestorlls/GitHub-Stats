import React from 'react';

const Input = ({
  label,
  name,
  id,
  type = 'text',
  value,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id || name} className="text-md font-medium text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default Input;
