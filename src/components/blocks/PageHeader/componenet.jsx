import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PageHeader = ({ titleName }) => {
  return (
    <div className="pageHeader">
      <p>{titleName}</p>
    </div>
  );
};

PageHeader.propTypes = {
  titleName: PropTypes.string,
};

PageHeader.defaultProps = {
  titleName: '',
};

export default PageHeader;
