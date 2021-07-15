import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from './page/HomePage';
import MusicDetail from './page/MusicDetailPage';
import MusicList from './page/MusicListPage';
import ScrollToTop from './util/ScrollToTop';
import './style/app.css';
import Footer from './components/common/Footer';

const App = () => {
  const [songs, setSongs] = useState(null);

  const onChangeSongs = useCallback(data => {
    setSongs(data);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/musiclist/:moodid"
          render={() => <MusicList songs={songs} setSongs={onChangeSongs} />}
        />
        <Route path="/musicdetail/:songid" component={MusicDetail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
