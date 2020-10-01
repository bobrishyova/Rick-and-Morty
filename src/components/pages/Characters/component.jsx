import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import Layout from '@/components/blocks/Layout';

const Characters = ({ getFetchCharacters, characters, charactersInfo }) => {
  return (
    <Layout
      tableRequest={getFetchCharacters}
      titleName="Characters"
      arrayOfHeaders={['Name', 'Status', 'Species', 'Gender']}
      tableDate={characters}
      tableItemConfig={['name', 'status', 'species', 'gender']}
      tableUrlTitle="character"
      tableInfo={charactersInfo}
    />
  );
};

Characters.propTypes = {
  getFetchCharacters: PropTypes.func,
  characters: PropTypes.arrayOf(PropTypes.object),
  charactersInfo: PropTypes.shape({
    count: PropTypes.number,
    pages: PropTypes.number,
    next: PropTypes.string,
  }),
};

Characters.defaultProps = {
  getFetchCharacters: noop,
  characters: [],
  charactersInfo: {},
};

export default Characters;
