import React from 'react';
import SongItem from './SongItem';
import { LoopCircleLoading } from 'react-loadingg';
import styled from 'styled-components';
import LoadingWrapper from '../common/LoadingWrapper';
import { Link } from 'react-router-dom';

const SongListBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 7rem;
  margin-left: calc((100vw - 1256px) / 5);
  margin-right: calc((100vw - 1256px) / 5);

  @media (min-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: calc((100vw - 1884px) / 5);
    margin-right: calc((100vw - 1884px) / 5);
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    margin-top: 7rem;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    margin-top: 5rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const NoSong = styled.div`
  width: 100%;
  height: calc(100vh - 9.0625rem);
  padding-top: 15rem;
  text-align: center;

  a {
    text-decoration: underline;
  }

  a:hover {
    color: #868e96;
  }
`;

const SongList = ({ songs, loading }) => {
  if (loading) {
    return (
      <LoadingWrapper>
        <LoopCircleLoading color="#ffa500b5" />
      </LoadingWrapper>
    );
  }

  if (!songs) {
    return (
      <NoSong>
        <p>검색된 노래가 없습니다.</p>
        <br />
        <Link to="/">홈으로</Link>
      </NoSong>
    );
  }

  return (
    <SongListBlock>
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </SongListBlock>
  );
};

export default SongList;
