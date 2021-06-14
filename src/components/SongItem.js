import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import melon from '../asset/melon.png';

const SongItem = ({
  song: { artist, title, lyrics, imgUrl, externalUrls },
}) => {
  const lyricsSplit = lyrics
    .split('\n')
    .slice(0, 6)
    .map((lyric, index) => (
      <React.Fragment key={index}>
        {lyric}&nbsp;&nbsp;&nbsp;
        {index % 2 === 1 && index !== 5 ? <br /> : ''}
      </React.Fragment>
    ));

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

  return (
    <div className="song-item">
      <div className="thumbnail">
        <img src={imgUrl} alt="song_image" />
      </div>
      <div className="song-info">
        <span className="song-title">{title}</span>
        <span className="song-artist">{artist}</span>
        {/* <span className="song-lyrics">{`${lyrics.substring(0, 100)}...`}</span> */}
        <span className="song-lyrics">{lyricsSplit}...</span>
      </div>
      <div className="external-link">{externalLinks}</div>
    </div>
  );
};

export default SongItem;
