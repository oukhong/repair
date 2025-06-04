import React, { useState } from 'react';

const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 4;
    let start = currentPage;

    // Limit start if too close to the end
    if (currentPage + maxPagesToShow - 1 > totalPages) {
      start = totalPages - maxPagesToShow + 1;
    }
    start = Math.max(start, 1); // Prevent negative pages

    for (let i = 0; i < maxPagesToShow && start + i <= totalPages; i++) {
      pages.push(start + i);
    }
    return pages;
  };

  return (
    <div className="flex bg-white rounded-lg font-[Poppins] justify-center p-4 space-x-1">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="h-12 px-3 border-2 border-indigo-600 rounded-l disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {getPageNumbers().map((pg) => (
        <button
          key={pg}
          onClick={() => goToPage(pg)}
          className={`h-12 w-12 border-2 border-indigo-600 ${
            currentPage === pg ? 'bg-indigo-600 text-white' : ''
          }`}
        >
          {pg}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        className="h-12 px-3 border-2 border-indigo-600 rounded-r disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

