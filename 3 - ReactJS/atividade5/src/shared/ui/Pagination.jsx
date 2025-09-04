import React from 'react';

const Pagination = ({ totalResults, page, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pageNumbers.push(<span key="dots-start" className="page-dots">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-button ${page === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(<span key="dots-end" className="page-dots">...</span>);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="page-button"
      >
        Anterior
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages || totalResults === 0}
        className="page-button"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;