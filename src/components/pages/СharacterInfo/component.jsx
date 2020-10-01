import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import customArrayUrlParse from '@/helpers/customArrayUrlParse';
import DATE_OF_CREATION from '@/constants/format';

import './styles.css';

const СharacterInfo = ({
  getFetchCharacter,
  character,
  multipleEpisodes,
  getFetchMultipleEpisodes,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (character.episode) {
      getFetchMultipleEpisodes(customArrayUrlParse(character.episode));
    }
  }, [getFetchMultipleEpisodes, character.episode]);

  useEffect(() => {
    getFetchCharacter(id);
  }, [getFetchCharacter, id]);

  const renderEpisodes = useMemo(() => {
    if (Array.isArray(multipleEpisodes)) {
      return multipleEpisodes.map((episode) => <div key={episode.id}>{episode.episode}</div>);
    }
    return <div>{multipleEpisodes.episode}</div>;
  }, [multipleEpisodes]);

  return (
    <div className="headerСharacterInfo">
      <div className="imgCharacterWithEpisodes">
        <img className="imgCharacter" src={character.image} alt="" />
        <p>Episodes: </p>
        <p>{renderEpisodes}</p>
      </div>
      <div className="infoAboutСharacter">
        <p className="nameСharacter">{character.name}</p>
        <p className="infoCharacter">
          Status:
          {character.status}
        </p>
        <p className="infoCharacter">
          Species:
          {character.species}
        </p>
        <p className="infoCharacter">
          Gender:
          {character.gender}
        </p>
        <p className="infoCharacter">
          Created:
          <Moment format={DATE_OF_CREATION}>{character.created}</Moment>
        </p>
      </div>
    </div>
  );
};

СharacterInfo.propTypes = {
  getFetchCharacter: PropTypes.func,
  getFetchMultipleEpisodes: PropTypes.func,
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    created: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
  }),
  multipleEpisodes: PropTypes.arrayOf(PropTypes.object),
};

СharacterInfo.defaultProps = {
  getFetchCharacter: noop,
  getFetchMultipleEpisodes: noop,
  character: {},
  multipleEpisodes: [],
};

export default СharacterInfo;
