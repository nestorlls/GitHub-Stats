import React from 'react';

const Button = ({ field, nameClass }) => {
  return <button className={'btn-' + nameClass}>{field}</button>;
};

export default Button;
