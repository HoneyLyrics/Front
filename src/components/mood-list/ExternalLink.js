import React from 'react';
import styled from 'styled-components';
import { handleMelonLinks } from '../../util/HandleSongPropertyComponents';

const ExternalLinkBlock = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Noto Sans', sans-serif;

  .melon {
    color: #00cd3b;
    width: 1.25rem;
    height: 1.25rem;
  }

  .youtube {
    color: #ff0000;
  }

  .spotify {
    color: #1ed760;
  }

  @media (max-width: 768px) {
    width: 68px;
    position: relative;
    bottom: 38px;
    left: 263px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
const ExternalLink = ({ songId }) => {
  const externalLinks = handleMelonLinks(songId);

  return <ExternalLinkBlock>{externalLinks}</ExternalLinkBlock>;
};

export default ExternalLink;
