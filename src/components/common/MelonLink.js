import React from 'react';
import styled from 'styled-components';
import melon from '../../asset/melon.png';

const MelonImg = styled.img`
  color: #00cd3b;
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: ${props => (props.detail ? '25px' : '30px')};
    height: ${props => (props.detail ? '25px' : '30px')};
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const MelonLink = ({ songId, detail }) => (
  <a
    href={`https://www.melon.com/song/detail.htm?songId=${songId}`}
    target="_blank"
    rel="noreferrer"
  >
    <MelonImg src={melon} alt="melon-logo" detail={detail} />
  </a>
);

export default MelonLink;
