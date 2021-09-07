import React from 'react';
import styled from 'styled-components';
import { handleLyrics } from '../../util/HandleSongPropertyComponents';

const SongInfosBlock = styled.div`
  width: 316px;
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
const SongInfos = ({ singer, title, lyrics }) => {
  const lyricsSplit = handleLyrics(lyrics);

  return (
    <SongInfosBlock>
      <SongTitle>{title}</SongTitle>
      <SongArtist>{singer}</SongArtist>
      <SongLyrics>{lyricsSplit}...</SongLyrics>
    </SongInfosBlock>
  );
};

export default SongInfos;
