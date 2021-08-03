import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './page/HomePage';
import MusicDetailPage from './page/MusicDetailPage';
import MusicListPage from './page/MusicListPage';
import ScrollToTop from './util/ScrollToTop';
import './style/app.css';
import Footer from './components/common/Footer';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

const App = () => {
  const [songs, setSongs] = useState(null);

  const onChangeSongs = useCallback(data => {
    setSongs(data);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route
          path="/musiclist/:moodid"
          render={() => (
            <MusicListPage songs={songs} setSongs={onChangeSongs} />
          )}
        />
        <Route path="/musicdetail/:songid" component={MusicDetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
