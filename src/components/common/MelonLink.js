import React from 'react';
import styled from 'styled-components';
import melon from '../../asset/melon.png';

const MelonImg = styled.img`
  color: #00cd3b;
  width: 1.25rem;
  height: 1.25rem;
`;

const MelonLink = ({ songId }) => (
  <a
    href={`https://www.melon.com/song/detail.htm?songId=${songId}`}
    target="_blank"
    rel="noreferrer"
  >
    <MelonImg src={melon} alt="melon-logo" />
    <span className="external-link-anchor-text">Melon</span>
  </a>
);

export default MelonLink;
