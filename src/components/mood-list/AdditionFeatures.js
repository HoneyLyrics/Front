import React, { useState } from 'react';
import styled from 'styled-components';
import MelonLink from '../common/MelonLink';
import { BsHeart, BsHeartFill, BsMusicNoteList } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const AdditionFeaturesBlock = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 175px;
    position: relative;
    bottom: 38px;
    left: 263px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    width: 30px;
    bottom: 35px;
    left: 195px;

    div:nth-child(2) {
      display: none;
    }
    a {
      display: none;
    }
  }
`;

const AdditionBtn = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const AdditionFeatures = ({ songId }) => {
  const [isLike, setIsLike] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);

  const handleIsLike = () => {
    setIsLike(isLike => !isLike);
  };

  const handleIsPlaylist = () => {
    setIsPlaylist(isPlaylist => !isPlaylist);
  };

  return (
    <AdditionFeaturesBlock>
      <AdditionBtn onClick={handleIsLike}>
        {isLike ? <BsHeartFill color="ff033e" /> : <BsHeart color="ff033e" />}
      </AdditionBtn>
      <AdditionBtn onClick={handleIsPlaylist}>
        {isPlaylist ? <AiOutlineCheck /> : <BsMusicNoteList />}
      </AdditionBtn>
      <MelonLink songId={songId} />
    </AdditionFeaturesBlock>
  );
};

export default AdditionFeatures;
