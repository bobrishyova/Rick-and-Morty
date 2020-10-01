import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Layout from '@/components/blocks/Layout';

const Locations = ({ getFetchLocations, locations, locationsInfo }) => {
  return (
    <Layout
      tableRequest={getFetchLocations}
      titleName="Locations"
      arrayOfHeaders={['Name', 'Dimension', 'Type']}
      tableDate={locations}
      tableItemConfig={['name', 'dimension', 'type']}
      tableUrlTitle="location"
      tableInfo={locationsInfo}
    />
  );
};

Locations.propTypes = {
  getFetchLocations: PropTypes.func,
  locations: PropTypes.arrayOf(PropTypes.object),
  locationsInfo: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.number,
    next: PropTypes.string,
  }),
};

Locations.defaultProps = {
  getFetchLocations: noop,
  locations: [],
  locationsInfo: {},
};

export default Locations;
