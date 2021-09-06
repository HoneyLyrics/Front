import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { relateYoutube } from '../../modules/song';
import RelateVideo from '../../components/mood-detail/RelateVideo';

const RelateVideoContainer = ({ singer, title }) => {
  const dispatch = useDispatch();
  const youtubeVideos = useSelector(({ song }) => song.youtubes?.items);

  useEffect(() => {
    dispatch(relateYoutube(singer, title));
  }, [dispatch, singer, title]);

  return <RelateVideo youtubeVideos={youtubeVideos} />;
};

export default RelateVideoContainer;
