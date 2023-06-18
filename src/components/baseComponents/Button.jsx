import React from 'react';

const Button = ({ type = 'button', disabled, field, nameClass, onclick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-${disabled ? 'disabled' : nameClass}`}
      onClick={onclick}>
      {field}
    </button>
  );
};

export default Button;
