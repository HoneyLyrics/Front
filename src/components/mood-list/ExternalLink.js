import React from 'react';
import styled from 'styled-components';
import MelonLink from '../common/MelonLink';

const ExternalLinkBlock = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Noto Sans', sans-serif;

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
  return (
    <ExternalLinkBlock>
      <MelonLink songId={songId} />
    </ExternalLinkBlock>
  );
};

export default ExternalLink;
