import React from 'react';
import styled from 'styled-components';
import noImage from '../../asset/no-image.gif';

const ThumbnailBlock = styled.div`
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

const Thumbnail = ({ imgURL }) => {
  return (
    <ThumbnailBlock>
      <img src={imgURL || noImage} alt="song_image" />
    </ThumbnailBlock>
  );
};

export default Thumbnail;
