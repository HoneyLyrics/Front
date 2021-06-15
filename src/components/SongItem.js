import React from 'react';
import { Link } from 'react-router-dom';
import { handleExternalLinks, handleLyrics } from '../lib/handleSongProperties';

const SongItem = ({
  song: { songId, artist, title, lyrics, imgUrl, externalUrls },
}) => {
  const lyricsSplit = handleLyrics(lyrics);
  const externalLinks = handleExternalLinks(externalUrls);

  return (
    <div className="song-item">
      <Link to={`/musicdetail/${songId}`}>
        <div className="thumbnail">
          <img src={imgUrl} alt="song_image" />
        </div>
      </Link>
      <Link id="info-anchor" to={`/musicdetail/${songId}`}>
        <div className="song-info">
          <span className="song-title">{title}</span>
          <span className="song-artist">{artist}</span>
          <span className="song-lyrics">{lyricsSplit}...</span>
        </div>
      </Link>
      <div className="external-link">{externalLinks}</div>
    </div>
  );
};

export default SongItem;
