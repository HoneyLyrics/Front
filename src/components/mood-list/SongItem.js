import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SongInfos from './SongInfos';
import Thumbnail from './Thumbnail';
import AdditionFeatures from './AdditionFeatures';

const SongItemBlock = styled.div`
  width: 628px;
  height: 232px;
  margin-top: 1.25rem;
  margin-right: 1rem;
  border: 1px solid #e5e5e5;
  box-shadow: 3px 3px 5px lightgrey;
  display: flex;

  a {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 464px;
    display: block;
  }

  @media (max-width: 480px) {
    width: 232px;
    height: 348px;

    a {
      display: flex;
      flex-direction: column;
    }
  }
`;

const SongItem = ({ song: { songId, singer, title, lyrics, imgURL } }) => {
  return (
    <SongItemBlock>
      <Link to={`/musicdetail/${songId}`}>
        <Thumbnail imgURL={imgURL} />
        <SongInfos title={title} singer={singer} lyrics={lyrics} />
      </Link>
      <AdditionFeatures songId={songId} />
    </SongItemBlock>
  );
};

export default SongItem;
