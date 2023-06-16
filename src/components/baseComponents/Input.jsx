import React from 'react';

const Input = ({
  label,
  name,
  id,
  type = 'text',
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id || name} className="text-md text-gray-600">
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
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default Input;
