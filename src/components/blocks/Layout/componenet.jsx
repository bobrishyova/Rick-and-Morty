import React, { useEffect } from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import TableItem from '@/components/blocks/TableItem';
import PageHeader from '@/components/blocks/PageHeader';
import Pagination from '@/components/blocks/Pagination';

import { TableHeader, Information, TableItemsWithDiv } from './styles';

const Layout = ({
  tableRequest,
  titleName,
  arrayOfHeaders,
  tableDate,
  tableInfo,
  tableUrlTitle,
  tableItemConfig,
}) => {
  const { search } = useLocation();

  useEffect(() => {
    const page = Number.parseInt(qs.parse(search).page, 10);
    tableRequest(page || 1);
  }, [tableRequest, search]);

  return (
    <TableHeader>
      <PageHeader titleName={titleName} />
      <Information>
        {arrayOfHeaders.map((header) => (
          <TableItemsWithDiv key={header} firstItem={arrayOfHeaders.length === 4}>
            {header}
          </TableItemsWithDiv>
        ))}
      </Information>
      {tableDate.map((item) => (
        <TableItem key={item.id} item={item} config={tableItemConfig} urlTitle={tableUrlTitle} />
      ))}
      <Pagination totalPage={tableInfo.pages} />
    </TableHeader>
  );
};

Layout.propTypes = {
  tableRequest: PropTypes.func,
  titleName: PropTypes.string,
  arrayOfHeaders: PropTypes.arrayOf(PropTypes.string),
  tableDate: PropTypes.arrayOf(PropTypes.object),
  tableInfo: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.number,
    next: PropTypes.string,
  }),
  tableItemConfig: PropTypes.arrayOf(PropTypes.string),
  tableUrlTitle: PropTypes.string,
};

Layout.defaultProps = {
  tableRequest: noop,
  titleName: '',
  arrayOfHeaders: [],
  tableDate: [],
  tableInfo: {},
  tableItemConfig: [],
  tableUrlTitle: '',
};

export default Layout;
