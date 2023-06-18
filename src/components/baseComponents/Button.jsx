import React from 'react';

const Button = ({ type = 'button', disabled, field, nameClass, onClick }) => {
  const addClass = nameClass ? `-${nameClass}` : '';
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn${disabled ? '-disabled' : addClass}`}
      onClick={onClick}>
      {field}
    </button>
  );
};

export default Button;
