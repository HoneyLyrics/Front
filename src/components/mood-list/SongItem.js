import React from 'react';
import { Link } from 'react-router-dom';
import {
  handleLyrics,
  handleMelonLinks,
} from '../../util/handleSongProperties';
import noImage from '../../asset/no-image.gif';
import styled from 'styled-components';

const SongItemBlock = styled.div`
  width: 634px;
  height: 232px;
  margin-top: 1.25rem;
  margin-right: 1rem;
  border: 1px solid #e5e5e5;
  box-shadow: 3px 3px 5px lightgrey;
  display: flex;

  a {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 464px;
    display: block;
  }

  @media (max-width: 480px) {
    width: 232px;
    height: 348px;

    a {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Thumbnail = styled.div`
  width: 232px;

  img {
    width: 230px;
    height: 230px;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    img {
      object-fit: none;
    }
  }
`;

const SongInfo = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 36px;
  font-family: 'Noto Sans KR', sans-serif;

  @media (max-width: 480px) {
    padding-left: 12px;
    width: 232px;
    height: 116px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const SongTitle = styled.span`
  font-size: 25px;
  font-weight: 900;
  font-family: 'Noto Serif KR', serif;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SongArtist = styled.span`
  font-size: 17px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SongLyrics = styled.span`
  font-size: 13px;
  color: #696969;

  @media (max-width: 768px) {
    visibility: hidden;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const ExternalLink = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Noto Sans', sans-serif;

  .melon {
    color: #00cd3b;
    width: 1.25rem;
    height: 1.25rem;
  }

  .youtube {
    color: #ff0000;
  }

  .spotify {
    color: #1ed760;
  }

  @media (max-width: 768px) {
    width: 68px;
    position: relative;
    bottom: 38px;
    left: 263px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const SongItem = ({ song: { songId, singer, title, lyrics, imgURL } }) => {
  const lyricsSplit = handleLyrics(lyrics);
  const externalLinks = handleMelonLinks(songId);

  return (
    <SongItemBlock>
      <Link to={`/musicdetail/${songId}`}>
        <Thumbnail>
          <img src={imgURL || noImage} alt="song_image" />
        </Thumbnail>
        <SongInfo>
          <SongTitle>{title}</SongTitle>
          <SongArtist>{singer}</SongArtist>
          <SongLyrics>{lyricsSplit}...</SongLyrics>
        </SongInfo>
      </Link>
      <ExternalLink>{externalLinks}</ExternalLink>
    </SongItemBlock>
  );
};

export default SongItem;
