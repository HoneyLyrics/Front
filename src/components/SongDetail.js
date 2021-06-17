import React, { useEffect, useState } from 'react';
import songes from '../asset/songs';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import {
  handleExternalLinks,
  handleLyricsWithBr,
  handleMoodTags,
} from '../util/handleSongProperties';
// import axios from '../../node_modules/axios/index';
// import apiKey from '../asset/apikey';
import { getYoutubeData } from '../asset/youtubeLinks';
import YoutubeIframe from '../util/YoutubeIframe';

const SongDetail = ({ songid }) => {
  const [relatedLinks, setrelatedLinks] = useState(null);
  const [fold, setFold] = useState(true);

  const handleFoldClick = () => {
    setFold(fold => !fold);
  };

  const song = songes[0].find(song => song.songId === songid);
  const { title, imgUrl, artist, moodTags, externalUrls, lyrics } = song;

  useEffect(() => {
    const getRelatedVideo = async () => {
      try {
        // const query = `${artist} ${title}`;
        // const response = await axios.get(
        //   `https://www.googleapis.com/youtube/v3/search?part=id&key=${apiKey}&q=${query}&maxResults=3&type=video&videoEmbeddable=true`,
        // );
        const response = await getYoutubeData(songid);
        setrelatedLinks(response.items);
      } catch (e) {
        console.log(e);
      }
    };
    getRelatedVideo();
  }, [songid]);

  const moodTagList = handleMoodTags(moodTags);
  const externalLinks = handleExternalLinks(externalUrls);
  const lyricsWithBr = handleLyricsWithBr(lyrics);
  const RelatedVideos = relatedLinks ? (
    relatedLinks.map(link => (
      <YoutubeIframe key={link.id.videoId} youtubeLink={link.id.videoId} />
    ))
  ) : (
    <div>로딩중..</div>
  );

  return (
    <div className="song-detail">
      <h3>곡 정보</h3>
      <div className="song-info-detail">
        <img src={imgUrl} alt="song_cover" />
        <div className="song-info-detail-text">
          <span className="song-title">{title}</span>
          <span className="song-artist">{artist}</span>
          <span className="mood-tags">{moodTagList}</span>
          <span className="external-link">{externalLinks}</span>
        </div>
      </div>
      <div className="related-video">
        <h3>관련 동영상</h3>
        <hr />
        <div className="video-tags">{RelatedVideos}</div>
      </div>
      <h3>가사</h3>
      <hr />
      <div className="lyrics-info">
        <div className={`song-lyrics ${fold ? '' : 'lyrics-on'}`}>
          {lyricsWithBr}
        </div>
        <button className="fold-button" onClick={handleFoldClick}>
          {fold ? (
            <>
              <span>더보기</span>
              <AiOutlineDown />
            </>
          ) : (
            <>
              <span>접기</span>
              <AiOutlineUp />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SongDetail;
