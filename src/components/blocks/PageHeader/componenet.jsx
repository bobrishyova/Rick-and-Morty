import React from 'react';
import PropTypes from 'prop-types';

import HeaderPage from './styles';

const PageHeader = ({ titleName }) => {
  return (
    <HeaderPage>
      <p>{titleName}</p>
    </HeaderPage>
  );
};

PageHeader.propTypes = {
  titleName: PropTypes.string,
};

PageHeader.defaultProps = {
  titleName: '',
};

export default PageHeader;
