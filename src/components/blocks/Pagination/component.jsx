import React, { useState, useCallback, useEffect } from 'react';
import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import createPagination from '@/helpers/createPagination';

import { DivWithPagination, PageSwitch, DivWithPage } from './styles';

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
    <DivWithPagination>
      <PageSwitch
        role="button"
        tabIndex={0}
        onClick={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
        onKeyDown={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
      >
        &#171;
      </PageSwitch>
      {createPagination({
        currentPage,
        totalPage,
      }).map((pagination) => (
        <DivWithPage
          role="button"
          tabIndex={0}
          key={pagination.key}
          onClick={handleSetCurrentPage(pagination.value)}
          onKeyDown={handleSetCurrentPage(pagination.value)}
          selected={currentPage === pagination.value}
          threeDots={pagination.value === '...'}
        >
          {pagination.value}
        </DivWithPage>
      ))}
      <PageSwitch
        role="button"
        tabIndex={0}
        onClick={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
        onKeyDown={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
      >
        &#187;
      </PageSwitch>
    </DivWithPagination>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number,
};

Pagination.defaultProps = {
  totalPage: 1,
};

export default Pagination;
