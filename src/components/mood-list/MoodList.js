import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moodInfos from '../../asset/moodInfos';

const MoodListBlock = styled.div`
  margin: 0 calc((100% - 60rem) / 2.5);
  margin-top: 7rem;
  font-family: 'Noto Serif KR', serif;

  @media (max-width: 1024px) {
    margin: 0 calc((100% - 40rem) / 5);
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    margin: 0 calc((100% - 28.5rem) / 4);
    margin-top: 7rem;
  }

  @media (max-width: 512px) {
    margin: 0 calc((100% - 19rem) / 4);
    margin-top: 5rem;
  }

  @media (max-width: 376px) {
    margin: 0;
    margin-top: 5rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 376px) {
    grid-template-columns: 1fr;
  }
`;

const MoodItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 9rem;
  margin: 0.5rem 0;
  border-radius: 36%;
  transition: all 0.5s;
  background-color: ${props => props.color};

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 1024px) {
    width: 10rem;
    height: 7.5rem;
  }

  @media (max-width: 768px) {
    width: 9.5rem;
    height: 7.125rem;
  }
`;

const MoodName = styled.div`
  font-size: 1.75rem;
  color: white;
  font-style: italic;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  @media (max-width: 1024px) {
    font-size: 1.625rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShortDesc = styled.div`
  font-size: 0.75rem;
  color: black;
`;

const MoodList = () => {
  return (
    <MoodListBlock>
      <Wrapper>
        {moodInfos.map(mood => (
          <Link key={mood.id} to={`/musiclist/${mood.id}`}>
            <MoodItem color={mood.color}>
              <MoodName>{mood.moodName_kr}</MoodName>
              <ShortDesc>{mood.moodName}</ShortDesc>
            </MoodItem>
          </Link>
        ))}
      </Wrapper>
    </MoodListBlock>
  );
};

export default MoodList;
