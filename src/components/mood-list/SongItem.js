import React from 'react';
import { Link } from 'react-router-dom';
import {
  handleLyrics,
  handleMelonLinks,
} from '../../util/handleSongProperties';
import noImage from '../../asset/no-image.gif';

const SongItem = ({ song: { songId, singer, title, lyrics, imgURL } }) => {
  const lyricsSplit = handleLyrics(lyrics);
  const externalLinks = handleMelonLinks(songId);

  return (
    <div className="song-item">
      <Link to={`/musicdetail/${songId}`}>
        <div className="thumbnail">
          <img src={imgURL || noImage} alt="song_image" />
        </div>
      </Link>
      <Link id="info-anchor" to={`/musicdetail/${songId}`}>
        <div className="song-info">
          <span className="song-title">{title}</span>
          <span className="song-artist">{singer}</span>
          <span className="song-lyrics">{lyricsSplit}...</span>
        </div>
      </Link>
      <div className="external-link">{externalLinks}</div>
    </div>
  );
};

export default SongItem;
