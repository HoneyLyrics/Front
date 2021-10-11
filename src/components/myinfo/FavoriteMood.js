import React from 'react';
import styled from 'styled-components';
import moodInfos from '../../asset/moodInfos';

const FavoriteMoodBlock = styled.div`
  border: 2px solid red;
  width: 50vw;
  padding-left: 5%;
  overflow: auto;

  h4 {
    margin: 0.65em 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MoodItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  width: 8.5rem;
  height: 7.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 40%;
  transition: all 0.5s;
  background-color: ${props => props.color};

  &:hover {
    transform: scale(1.15);
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
  font-size: 1.375rem;
  font-style: oblique;
  color: white;
  text-shadow: -1px 0 #777777, 0 1px #777777, 1px 0 #777777, 0 -1px #777777;

  @media (max-width: 1024px) {
    font-size: 1.625rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FavoriteMood = ({ personalMoods }) => {
  return (
    <FavoriteMoodBlock>
      <h4>내가 선호하는 감정</h4>
      <Wrapper>
        {personalMoods.map(tag => {
          const mood = moodInfos.find(m => m.id === tag.id);
          return (
            <MoodItem color={mood.color} key={tag.id}>
              <MoodName>{mood.moodName_kr}</MoodName>
            </MoodItem>
          );
        })}
      </Wrapper>
    </FavoriteMoodBlock>
  );
};

export default FavoriteMood;
