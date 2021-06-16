import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './page/Home';
import MusicDetail from './page/MusicDetail';
import MusicList from './page/MusicList';
import ScrollToTop from './util/ScrollToTop';
import './style/app.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/musiclist/:moodid" component={MusicList} />
        <Route path="/musicdetail/:songid" component={MusicDetail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
