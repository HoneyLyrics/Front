import React, { useState } from 'react';
import styled from 'styled-components';
import MelonLink from '../common/MelonLink';
import { BsHeart, BsHeartFill, BsMusicNoteList } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const AdditionFeaturesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const AdditionBtn = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const AdditionFeaturesDetail = ({ songId }) => {
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
      <MelonLink songId={songId} detail={true} />
    </AdditionFeaturesBlock>
  );
};

export default AdditionFeaturesDetail;
