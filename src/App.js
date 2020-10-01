import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/blocks/Header/component';
import Characters from './components/pages/Characters';
import Locations from './components/pages/Locations';
import Episodes from './components/pages/Episodes';
import СharacterInfo from './components/pages/СharacterInfo';
import LocationInfo from './components/pages/LocationInfo';
import EpisodeInfo from './components/pages/EpisodeInfo';
import store from './store';
import {
  CHARACTERS_PAGE,
  LOCATIONS_PAGE,
  EPISODES_PAGE,
  CHARACTER_INFO_PAGE,
  LOCATION_INFO_PAGE,
  EPISODE_INFO_PAGE,
} from './constants';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path={CHARACTERS_PAGE} component={Characters} />
          <Route path={LOCATIONS_PAGE} component={Locations} />
          <Route path={EPISODES_PAGE} component={Episodes} />
          <Route path={CHARACTER_INFO_PAGE} component={СharacterInfo} />
          <Route path={LOCATION_INFO_PAGE} component={LocationInfo} />
          <Route path={EPISODE_INFO_PAGE} component={EpisodeInfo} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
