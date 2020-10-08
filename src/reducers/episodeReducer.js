import { EPISODES, EPISODE, MULTIPLE_EPISODES } from '@/constants';

const initialState = {
  episodes: [],
  episodesInfo: {},
  episode: {},
  multipleEpisodes: [],
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODES.SUCCESS:
      return {
        ...state,
        episodes: action.payload.results,
        episodesInfo: action.payload.info,
      };
    case EPISODE.SUCCESS:
      return {
        ...state,
        episode: action.payload,
      };
    case MULTIPLE_EPISODES.SUCCESS:
      return {
        ...state,
        multipleEpisodes: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
