import React from 'react';

const Username = ({ username, font_weight, size }) => {
  return (
    <p
      className={`text-${size || ''} font-${
        font_weight || 'normal'
      } text-center text-white p-1`}>
      {username}
    </p>
  );
};

export default Username;
