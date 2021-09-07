import React from 'react';
import styled from 'styled-components';
import MelonLink from '../common/MelonLink';
import moodInfos from '../../asset/moodInfos';

const SongInfoDetailBlock = styled.div`
  height: 38vw;
  /* border: 1px solid #e5e5e5; */

  @media (min-width: 1440px) {
    height: 450px;
  }
`;

const CoverImage = styled.img`
  width: 38vw;
  float: left;
  position: relative;

  @media (min-width: 1440px) {
    width: 450px;
  }
`;

const SongInfoText = styled.div`
  position: relative;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;

  @media (max-width: 1024px) {
    padding-left: 25px;
  }

  @media (max-width: 550px) {
    padding-left: 15px;
  }
`;

const Title = styled.span`
  font-size: 1.625rem;
  font-weight: 900;
  margin-top: 7%;
  font-family: 'Noto Serif KR', serif;

  @media (max-width: 1024px) {
    margin-top: 3%;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }

  @media (max-width: 550px) {
    font-size: 1.125rem;
  }
`;

const Artist = styled.span`
  font-size: 1.125rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 550px) {
    font-size: 0.75rem;
  }
`;

const Tags = styled.span`
  color: #424242;
  font-size: 0.75rem;

  span {
    border: 2px solid;
    border-radius: 50px;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;

    span {
      padding: 5px;
      margin: 0 5px;
    }
  }

  @media (max-width: 550px) {
    span {
      padding: 3px;
    }

    span:last-child {
      display: none;
    }
  }
`;

const Links = styled.span`
  display: flex;
  justify-content: flex-start;

  a {
    color: black;
    font-weight: 500;
  }

  .melon {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    a > span {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 550px) {
    a > span {
      font-size: 0.5rem;
    }

    .melon {
      width: 15px;
      height: 15px;
    }
  }
`;

const SongInfoDetail = ({ moods, songId, imgURL, title, singer }) => {
  const moodTagList = moods.map(tag => {
    const mood = moodInfos.find(m => m.id === tag.moodId);
    return (
      <span
        key={mood.id}
        className={mood.mood}
        style={{ borderColor: mood.color }}
      >
        {mood.moodName_kr}
      </span>
    );
  });

  return (
    <SongInfoDetailBlock>
      <CoverImage src={imgURL} alt="song_cover" />
      <SongInfoText>
        <Title>{title}</Title>
        <Artist>{singer}</Artist>
        <Tags>{moodTagList}</Tags>
        <Links>
          <MelonLink songId={songId} />
        </Links>
      </SongInfoText>
    </SongInfoDetailBlock>
  );
};

export default SongInfoDetail;
