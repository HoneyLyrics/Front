import React from 'react';
import songes from '../asset/songs';
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
        <span className="song-lyrics">{lyricsWithBr}</span>
      </div>
    </div>
  );
};

export default SongDetail;
