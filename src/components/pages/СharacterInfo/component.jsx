import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import customArrayUrlParse from '@/helpers/customArrayUrlParse';
import DATE_OF_CREATION from '@/constants/format';

import {
  HeaderСharacterInfo,
  InfoAboutСharacter,
  ImgCharacter,
  ImgCharacterWithEpisodes,
  CharacterWithEpisodes,
  NameСharacter,
  InfoCharacter,
} from './styles';

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
    <HeaderСharacterInfo>
      <ImgCharacterWithEpisodes>
        <ImgCharacter src={character.image} alt="" />
        <CharacterWithEpisodes>Episodes: </CharacterWithEpisodes>
        <CharacterWithEpisodes>{renderEpisodes}</CharacterWithEpisodes>
      </ImgCharacterWithEpisodes>
      <InfoAboutСharacter>
        <NameСharacter>{character.name}</NameСharacter>
        <InfoCharacter>
          Status:
          {character.status}
        </InfoCharacter>
        <InfoCharacter>
          Species:
          {character.species}
        </InfoCharacter>
        <InfoCharacter>
          Gender:
          {character.gender}
        </InfoCharacter>
        <InfoCharacter>
          Created:
          <Moment format={DATE_OF_CREATION}>{character.created}</Moment>
        </InfoCharacter>
      </InfoAboutСharacter>
    </HeaderСharacterInfo>
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
