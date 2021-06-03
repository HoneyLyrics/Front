import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './page/Home';
import MusicDetail from './page/MusicDetail';
import MusicList from './page/MusicList';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/musiclist/:moodid" component={MusicList} />
        <Route path="/musicdetail/:songid" component={MusicDetail} />
      </Switch>
    </div>
  );
};

export default App;
