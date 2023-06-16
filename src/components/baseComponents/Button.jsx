import React from 'react';

const Button = ({ type = 'button', disabled, field, nameClass }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-${disabled ? 'disabled' : nameClass}`}>
      {field}
    </button>
  );
};

export default Button;
