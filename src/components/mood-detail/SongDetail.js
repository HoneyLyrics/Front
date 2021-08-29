import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import styled from 'styled-components';
import RelateVideoContainer from '../../container/mood-detail/RelateVideoContainer';

import LoadingWrapper from '../common/LoadingWrapper';
import NoData from '../common/NoData';
import LyricsInfo from './LyricsInfo';
import SongInfoDetail from './SongInfoDetail';

const SongDetailBlock = styled.div`
  margin: 7rem auto 0;
  font-family: 'Noto Sans KR', sans-serif;
  width: 1024px;

  h3 {
    margin-top: 3rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #d9d9d9;
  }

  @media (max-width: 1024px) {
    margin-top: 5rem;
    margin-left: 3rem;
    margin-right: 3rem;
    width: calc(100% - 6rem);

    h3 {
      padding-left: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: calc(100% - 1rem);
  }
`;

const SongDetail = ({ song, loading }) => {
  if (loading) {
    return (
      <LoadingWrapper>
        <LoopCircleLoading color="#ffa500b5" />
      </LoadingWrapper>
    );
  }

  if (!song) {
    return <NoData str="잘못된 노래정보입니다." />;
  }

  const { songId, title, imgURL, singer, moods, lyrics } = song;

  return (
    <SongDetailBlock>
      <h3>곡 정보</h3>
      <SongInfoDetail
        moods={moods}
        songId={songId}
        imgURL={imgURL}
        title={title}
        singer={singer}
      />
      <h3>관련 동영상</h3>
      {/* <RelateVideoContainer singer={singer} title={title} /> */}
      <h3>가사</h3>
      <LyricsInfo lyrics={lyrics} />
    </SongDetailBlock>
  );
};

export default SongDetail;
