import { SUCCESS_EPISODES, SUCCESS_EPISODE, SUCCESS_MULTIPLE_EPISODES } from '@/constants';

const initialState = {
  episodes: [],
  episodesInfo: {},
  episode: {},
  multipleEpisodes: [],
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_EPISODES:
      return {
        ...state,
        episodes: action.payload.results,
        episodesInfo: action.payload.info,
      };
    case SUCCESS_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };
    case SUCCESS_MULTIPLE_EPISODES:
      return {
        ...state,
        multipleEpisodes: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
