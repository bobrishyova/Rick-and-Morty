import { all } from 'redux-saga/effects';
import characterRoot from './sagaСharacter';
import charactersRoot from './sagaCharacters';
import episodeRoot from './sagaEpisode';
import episodesRoot from './sagaEpisodes';
import locationRoot from './sagaLocation';
import locationsRoot from './sagaLocations';
import multipleCharactersRoot from './sagaMultipleCharacters';
import multipleEpisodesRoot from './sagaMultipleEpisodes';

export default function* rootSaga() {
  yield all([
    characterRoot(),
    charactersRoot(),
    episodeRoot(),
    episodesRoot(),
    locationRoot(),
    locationsRoot(),
    multipleCharactersRoot(),
    multipleEpisodesRoot(),
  ]);
}
