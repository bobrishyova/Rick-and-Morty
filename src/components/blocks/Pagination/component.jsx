import React, { useState, useCallback, useEffect } from 'react';
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import createPagination from '@/helpers/createPagination';

import './styles.css';

const Pagination = ({ totalPage }) => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = Number.parseInt(qs.parse(search).page, 10);
    setCurrentPage(page || 1);
  }, [search, setCurrentPage]);

  const handleSetCurrentPage = useCallback(
    (page) => () => {
      push({
        pathname,
        search: qs.stringify({
          page,
        }),
      });
    },
    [pathname],
  );

  return (
    <div className="divWithPagination">
      <div
        role="button"
        tabIndex={0}
        className="pageSwitch"
        onClick={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
        onKeyDown={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
      >
        &#171;
      </div>
      {createPagination({
        currentPage,
        totalPage,
      }).map((pagination) => (
        <div
          role="button"
          tabIndex={0}
          key={pagination.key}
          onClick={handleSetCurrentPage(pagination.value)}
          onKeyDown={handleSetCurrentPage(pagination.value)}
          className={`divWithPage ${currentPage === pagination.value ? 'selected' : ''} 
					${pagination.value === '...' ? 'threeDotsStyle' : ''} `}
        >
          {pagination.value}
        </div>
      ))}
      <div
        role="button"
        tabIndex={0}
        className="pageSwitch"
        onClick={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
        onKeyDown={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
      >
        &#187;
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number,
};

Pagination.defaultProps = {
  totalPage: 1,
};

export default Pagination;
