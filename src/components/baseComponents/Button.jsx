import React from 'react';

const Button = ({ type = 'button', disabled, field, nameClass, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-${disabled ? 'disabled' : nameClass}`}
      onClick={onClick}>
      {field}
    </button>
  );
};

export default Button;
