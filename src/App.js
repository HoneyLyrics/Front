import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './page/HomePage';
import MusicDetailPage from './page/MusicDetailPage';
import MusicListPage from './page/MusicListPage';
import ScrollToTop from './util/ScrollToTop';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/musiclist/:moodid" component={MusicListPage} />
        <Route path="/musicdetail/:songid" component={MusicDetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
