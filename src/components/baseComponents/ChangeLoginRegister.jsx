import React from 'react';

const ChangeLoginRegister = ({ text, onClick, buttonText }) => {
  return (
    <div className="text-white text-center">
      <span>{text} </span>
      <button
        onClick={onClick}
        className="hover:text-orange-500"
        name={buttonText}>
        {buttonText}
      </button>
    </div>
  );
};

export default ChangeLoginRegister;
