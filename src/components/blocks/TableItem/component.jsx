import React from 'react';
import PropTypes from 'prop-types';

import { LinkWithInformation, ItemTable, DivItem } from './styles';

const TableItem = ({ item, config, urlTitle }) => {
  const linksCharacterItem = {
    textDecoration: 'none',
    color: '#ffffff',
  };
  return (
    <LinkWithInformation style={linksCharacterItem} to={`/${urlTitle}/${item.id}`}>
      {config.map((info) => (
        <DivItem widthOfItems={config.length === 3}>
          <ItemTable>{item[info]}</ItemTable>
        </DivItem>
      ))}
    </LinkWithInformation>
  );
};

TableItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  config: PropTypes.arrayOf(PropTypes.string).isRequired,
  urlTitle: PropTypes.string.isRequired,
};

export default TableItem;
