import React from 'react';

const ShowCurrentPage = ({ totalPages, currentPage }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <p
          key={index}
          className={`${
            currentPage === index + 1
              ? 'bg-gray-100 '
              : 'bg-gray-400 text-white'
          } w-8 h-8 text-center rounded-md text-xl`}>
          {index + 1}
        </p>
      ))}
    </div>
  );
};

export default ShowCurrentPage;
