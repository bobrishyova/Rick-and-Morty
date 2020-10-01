import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const TableItem = ({ item, config, urlTitle }) => {
  const linksCharacterItem = {
    textDecoration: 'none',
    color: '#ffffff',
  };
  return (
    <Link className="linkWithInformation" style={linksCharacterItem} to={`/${urlTitle}/${item.id}`}>
      {config.map((info) => (
        <div className={config.length === 3 ? 'divItem' : 'divTableItemWithSmallerWidth'}>
          <p className="itemTable">{item[info]}</p>
        </div>
      ))}
    </Link>
  );
};

TableItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  config: PropTypes.arrayOf(PropTypes.string).isRequired,
  urlTitle: PropTypes.string.isRequired,
};

export default TableItem;
