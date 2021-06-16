import React, { useState } from 'react';
import songes from '../asset/songs';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import {
  handleExternalLinks,
  handleLyricsWithBr,
  handleMoodTags,
} from '../lib/handleSongProperties';

const SongDetail = ({ songid }) => {
  const song = songes[0].find(song => song.songId === songid);
  const { title, imgUrl, artist, moodTags, externalUrls, lyrics } = song;

  const moodTagList = handleMoodTags(moodTags);
  const externalLinks = handleExternalLinks(externalUrls);
  const lyricsWithBr = handleLyricsWithBr(lyrics);

  const [fold, setFold] = useState(true);
  const handleFoldClick = () => {
    setFold(fold => !fold);
  };

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
