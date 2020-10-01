import React, { useEffect } from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import PageHeader from '@/components/blocks/PageHeader';
import Pagination from '@/components/blocks/Pagination';

import './styles.css';

const Layout = ({
  tableRequest,
  titleName,
  arrayOfHeaders = [],
  tableDate,
  tableItem: TableItem,
  tableInfo,
}) => {
  const { search } = useLocation();

  useEffect(() => {
    const page = Number.parseInt(qs.parse(search).page, 10);
    tableRequest(page || 1);
  }, [tableRequest, search]);

  return (
    <div className="tableHeader">
      <PageHeader titleName={titleName} />
      <div className="information">
        {arrayOfHeaders.map((header) => (
          <p
            key={header}
            className={arrayOfHeaders.length === 4 ? 'tableItemsWithSmallerDiv' : 'tableItems'}
          >
            {header}
          </p>
        ))}
      </div>
      {tableDate.map((item) => (
        <TableItem key={item.id} item={item} />
      ))}
      <Pagination totalPage={tableInfo.pages} />
    </div>
  );
};

Layout.propTypes = {
  tableRequest: PropTypes.func,
  titleName: PropTypes.string,
  arrayOfHeaders: PropTypes.arrayOf(PropTypes.string),
  tableDate: PropTypes.arrayOf(PropTypes.object),
  tableItem: PropTypes.elementType,
  tableInfo: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.number,
    next: PropTypes.string,
  }),
};

Layout.defaultProps = {
  tableRequest: noop,
  titleName: '',
  arrayOfHeaders: [],
  tableDate: [],
  tableItem: React.Fragment,
  tableInfo: {},
};

export default Layout;
