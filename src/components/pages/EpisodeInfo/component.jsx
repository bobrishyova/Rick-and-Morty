import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import customArrayUrlParse from '@/helpers/customArrayUrlParse';

import './styles.css';

const EpisodeInfo = ({
  episode,
  getFetchEpisode,
  getFetchMultipleCharacters,
  multipleCharacters,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (episode.characters) {
      getFetchMultipleCharacters(customArrayUrlParse(episode.characters));
    }
  }, [getFetchMultipleCharacters, episode.characters]);

  useEffect(() => {
    getFetchEpisode(id);
  }, [id, getFetchEpisode]);

  const renderCharacter = useMemo(() => {
    if (Array.isArray(multipleCharacters)) {
      return multipleCharacters.map((character) => <div key={character.id}>{character.name}</div>);
    }
    return <div>{multipleCharacters.name}</div>;
  }, [multipleCharacters]);

  return (
    <div className="headerEpisodeInfo">
      <div className="divWithNameEpisode">{episode.name}</div>
      <p className="divWithAirDateEpisode">
        Air Date:
        {episode.air_date}
      </p>
      <p className="divWithEpisode">
        Episode:
        {episode.episode}
      </p>
      <p className="characters">Сharacters:</p>
      <p className="allCharacters">{renderCharacter}</p>
    </div>
  );
};

EpisodeInfo.propTypes = {
  getFetchMultipleCharacters: PropTypes.func,
  getFetchEpisode: PropTypes.func,
  episode: PropTypes.shape({
    name: PropTypes.string,
    air_date: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string),
    episode: PropTypes.string,
  }),
  multipleCharacters: PropTypes.arrayOf(PropTypes.object),
};

EpisodeInfo.defaultProps = {
  getFetchMultipleCharacters: noop,
  getFetchEpisode: noop,
  episode: {},
  multipleCharacters: [],
};

export default EpisodeInfo;
