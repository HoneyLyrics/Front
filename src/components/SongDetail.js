import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import melon from '../asset/melon.png';
import moods from '../asset/moods';

const SongDetail = ({ song }) => {
  const { title, imgUrl, artist, moodTags, externalUrls, lyrics } = song;

  const moodTagList = moodTags.map(tag => {
    const mood = moods.find(m => m.id === tag);
    return (
      <span
        key={mood.id}
        className={mood.moodName}
        style={{ borderColor: mood.color }}
      >
        {mood.moodName_kr}
      </span>
    );
  });

  const externalIcon = url => {
    switch (url) {
      case 'youtube':
        return <AiFillYoutube className="youtube" />;
      case 'spotify':
        return <FaSpotify className="spotify" />;
      case 'melon':
        return <img src={melon} alt="melon-logo" className="melon" />;
      default:
        return '';
    }
  };

  const externalLinks = Object.keys(externalUrls).map((url, index) => (
    <a key={index} href={externalUrls[url]} target="_blank" rel="noreferrer">
      <span className="external-link-anchor-icon">{externalIcon(url)}</span>
      <span className="external-link-anchor-text">{url}</span>
    </a>
  ));

  const lyricsWithBr = lyrics.split('\n').map((lyric, index) => (
    <React.Fragment key={index}>
      {lyric}
      <br />
    </React.Fragment>
  ));

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