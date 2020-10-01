import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Layout from '@/components/blocks/Layout';

const Episodes = ({ getFetchEpisodes, episodes, episodesInfo }) => {
  return (
    <Layout
      tableRequest={getFetchEpisodes}
      titleName="Episodes"
      arrayOfHeaders={['Name', 'Air Date', 'Episode']}
      tableDate={episodes}
      tableItemConfig={['name', 'air_date', 'episode']}
      tableUrlTitle="episode"
      tableInfo={episodesInfo}
    />
  );
};

Episodes.propTypes = {
  getFetchEpisodes: PropTypes.func,
  episodes: PropTypes.arrayOf(PropTypes.object),
  episodesInfo: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.number,
    next: PropTypes.string,
  }),
};

Episodes.defaultProps = {
  getFetchEpisodes: noop,
  episodes: [],
  episodesInfo: {},
};

export default Episodes;
