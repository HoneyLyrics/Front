import React, { useState } from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { LoopCircleLoading } from 'react-loadingg';
import styled from 'styled-components';
import RelateVideoContainer from '../../container/mood-detail/RelateVideoContainer';
import {
  handleLyricsWithBr,
  handleMelonLinks,
  handleMoodTags,
} from '../../util/handleSongProperties';
import LoadingWrapper from '../common/LoadingWrapper';

const SongDetail = ({ song, loading }) => {
  const [fold, setFold] = useState(true);

  if (loading) {
    return (
      <LoadingWrapper>
        <LoopCircleLoading color="#ffa500b5" />
      </LoadingWrapper>
    );
  }

  const handleFoldClick = () => {
    setFold(fold => !fold);
  };

  const { songId, title, imgURL, singer, moods, lyrics } = song;
  const moodTagList = handleMoodTags(moods);
  const externalLinks = handleMelonLinks(songId);
  const lyricsWithBr = handleLyricsWithBr(lyrics);

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
      <RelateVideoContainer singer={singer} title={title} />
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
