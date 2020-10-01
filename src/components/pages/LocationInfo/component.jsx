import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import customArrayUrlParse from '@/helpers/customArrayUrlParse';

import './styles.css';

const LocationInfo = ({
  getFetchMultipleCharacters,
  getFetchLocation,
  location,
  multipleCharacters,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (location.residents) {
      getFetchMultipleCharacters(customArrayUrlParse(location.residents));
    }
  }, [getFetchMultipleCharacters, location.residents]);

  useEffect(() => {
    getFetchLocation(id);
  }, [id, getFetchLocation]);

  const renderResident = useMemo(() => {
    if (Array.isArray(multipleCharacters)) {
      return multipleCharacters.map((character) => <div key={character.id}>{character.name}</div>);
    }
    return <div>{multipleCharacters.name}</div>;
  }, [multipleCharacters]);

  return (
    <div className="headerLocationInfo">
      <div className="divWithNameLocation">{location.name}</div>
      <div className="divWithTypeLocation">
        Type:
        {location.type}
      </div>
      <p className="residents">Residents:</p>
      <p>{renderResident}</p>
    </div>
  );
};

LocationInfo.propTypes = {
  getFetchMultipleCharacters: PropTypes.func,
  getFetchLocation: PropTypes.func,
  location: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    residents: PropTypes.arrayOf(PropTypes.string),
  }),
  multipleCharacters: PropTypes.arrayOf(PropTypes.object),
};

LocationInfo.defaultProps = {
  getFetchMultipleCharacters: noop,
  getFetchLocation: noop,
  location: {},
  multipleCharacters: [],
};

export default LocationInfo;
