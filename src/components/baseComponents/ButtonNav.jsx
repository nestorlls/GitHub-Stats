import React from 'react';

const ButtonNav = ({
  children,
  onClick,
  currentPage,
  limiteLower,
  limiteHigher,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={currentPage === (limiteLower ?? limiteHigher)}
      className="text-gray-600 font-bold bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center text-xl hover:bg-gray-400 cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed">
      {children}
    </button>
  );
};

export default ButtonNav;
