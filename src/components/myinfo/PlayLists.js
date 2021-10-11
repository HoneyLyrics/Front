import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsMusicNoteList } from 'react-icons/bs';

const PlayListsBlock = styled.div`
  border: 2px solid green;
  height: 50%;

  h4 {
    margin: 0.65em 0;
  }
`;

const ListflowBlock = styled.div`
  height: calc(100% - 2.65em);
  width: 100%;

  -webkit-perspective: 400px;
  perspective: 350px;
  overflow: hidden;
`;

const PlaylistSection = styled.section`
  position: absolute;
  top: 71%;
  left: 57%;

  width: 139px;
  height: 85px;

  margin-top: -90px;
  margin-left: -90px;

  background-color: white;
  background-size: 85px;
  background-repeat: no-repeat;

  -webkit-transform-style: preserve-3d;
  -mox-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transition: all 250ms ease-in;
  -moz-transition: all 250ms ease-in;
  -ms-transition: all 250ms ease-in;
  -o-transition: all 250ms ease-in;
  transition: all 250ms ease-in;

  -webkit-box-reflect: below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.65, transparent), to(white));
`;

const slidein = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-120%);
  }
`;

const PlaylistTitle = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 54.5px;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  overflow: hidden;

  .playlist-title {
    font-size: 0.75rem;
    font-weight: 100;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .playlist-count {
    font-size: 0.875rem;
    font-weight: 400;
  }

  &:hover {
    .playlist-title {
      overflow: visible;
      animation: ${slidein} 3s linear infinite;
    }
  }
`;

const FlowBtn = styled.button`
  position: fixed;
  height: 100%;
  z-index: 100;
  border: none;
  background: rgba(255, 255, 255, 0);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const PrevBtn = styled(FlowBtn)`
  left: 0;

  &:hover {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0)
    );
  }
`;

const NextBtn = styled(FlowBtn)`
  right: 0;

  &:hover {
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0)
    );
  }
`;

const PlayLists = ({ personalPlaylist }) => {
  const [index, setIndex] = useState(0);

  const OFFSET = 70,
    ROTATION = 45,
    BASE_ZINDEX = 10,
    MAX_ZINDEX = 42;

  const playlistSections = personalPlaylist.map((playlist, i) => {
    const coverSong = playlist[1];

    let transform = null;
    let zIndex = null;

    if (i < index) {
      transform = `translate(-${
        OFFSET * (index - i)
      }%) rotateY(${ROTATION}deg)`;
      zIndex = BASE_ZINDEX + i;
    } else if (i > index) {
      transform = `translateX(${
        OFFSET * (i - index)
      }%) rotateY(-${ROTATION}deg)`;
      zIndex = BASE_ZINDEX + (personalPlaylist.length - i);
    } else {
      transform = 'rotateY(0deg) translateZ(140px)';
      zIndex = MAX_ZINDEX;
    }

    return (
      <PlaylistSection
        key={i}
        style={{
          backgroundImage: `url(${coverSong.imgURL})`,
          transform: transform,
          zIndex: zIndex,
        }}
        onClick={() => setIndex(i)}
      >
        <PlaylistTitle>
          <div className="playlist-title">{playlist[0].title}</div>
          <div className="playlist-count">{playlist.length - 1}</div>
          <div className="playlist-icon">
            <BsMusicNoteList />
          </div>
        </PlaylistTitle>
      </PlaylistSection>
    );
  });

  const flowRight = () => {
    if (index) {
      setIndex(idx => idx - 1);
    }
  };

  const flowLeft = () => {
    if (personalPlaylist.length > index + 1) {
      setIndex(idx => idx + 1);
    }
  };

  return (
    <PlayListsBlock>
      <h4>나의 플레이리스트</h4>
      <ListflowBlock>
        <PrevBtn onClick={flowRight} dir={'prev'}>
          <IoIosArrowBack />
        </PrevBtn>
        {playlistSections}
        <NextBtn onClick={flowLeft} dir={'next'}>
          <IoIosArrowForward />
        </NextBtn>
      </ListflowBlock>
    </PlayListsBlock>
  );
};

export default PlayLists;
