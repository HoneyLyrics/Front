import React, { useEffect, useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import {
  handleLyricsWithBr,
  handleMelonLinks,
  handleMoodTags,
} from '../util/handleSongProperties';
import axios from '../../node_modules/axios/index';
import apiKey from '../asset/apikey';
// import { getYoutubeData } from '../asset/youtubeLinks';
import YoutubeIframe from '../util/YoutubeIframe';
import { TransverseLoading } from 'react-loadingg';

const SongDetail = ({ song }) => {
  const [{ songId, title, imgURL, singer, mood1, mood2, mood3, lyrics }] = song;

  const [relatedLinks, setrelatedLinks] = useState(null);
  const [fold, setFold] = useState(true);

  const handleFoldClick = () => {
    setFold(fold => !fold);
  };

  useEffect(() => {
    const getRelatedVideo = async () => {
      try {
        const query = `${singer} ${title}`;
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=id&key=${apiKey}&q=${query}&maxResults=3&type=video&videoEmbeddable=true`,
        );
        // const response = await getYoutubeData(songId);
        setrelatedLinks(response.data.items);
      } catch (e) {
        console.log(e);
      }
    };
    getRelatedVideo();
  }, [singer, title]);

  const moodTagList = handleMoodTags([mood1, mood2, mood3]);
  const externalLinks = handleMelonLinks(songId);
  const lyricsWithBr = handleLyricsWithBr(lyrics);
  const RelatedVideos = relatedLinks ? (
    relatedLinks.map(link => (
      <YoutubeIframe key={link.id.videoId} youtubeLink={link.id.videoId} />
    ))
  ) : (
    <div>
      <TransverseLoading color="red" style={{ position: 'none' }} />
    </div>
  );

  return (
    <div className="song-detail">
      <h3>곡 정보</h3>
      <div className="song-info-detail">
        <img src={imgURL} alt="song_cover" />
        <div className="song-info-detail-text">
          <span className="song-title">{title}</span>
          <span className="song-artist">{singer}</span>
          <span className="mood-tags">{moodTagList}</span>
          <span className="external-link">{externalLinks}</span>
        </div>
      </div>
      <br />
      <div className="related-video">
        <hr />
        <h3>관련 동영상</h3>
        <div className="video-tags">{RelatedVideos}</div>
      </div>
      <br />
      <hr />
      <h3>가사</h3>
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
