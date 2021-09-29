import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const LikedMusicBlock = styled.div`
  border: 2px solid blue;
  height: 50%;

  h4 {
    margin: 0;
    margin-top: 0.65em;
    margin-bottom: 0.65em;
  }
`;

const CoverflowBlock = styled.div`
  height: calc(100% - 2.65em);
  width: 100%;

  -webkit-perspective: 400px;
  perspective: 350px;
  overflow: hidden;
`;

const CoverSection = styled.section.attrs(props => ({
  style: {
    backgroundImage: `url(${props.url})`,
    zIndex: props.zIndex,
    transform: props.transform,
  },
}))`
  position: absolute;
  top: 71%;
  left: 57%;

  width: 85px;
  height: 85px;

  margin-top: -90px;
  margin-left: -90px;

  background-color: white;
  background-size: 100%;

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

const LikedMusic = ({ personalSongs }) => {
  const [index, setIndex] = useState(Math.floor(0));

  const coverSections = personalSongs.map((song, i) => {
    const OFFSET = 70,
      ROTATION = 45,
      BASE_ZINDEX = 10,
      MAX_ZINDEX = 42;

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
      zIndex = BASE_ZINDEX + (personalSongs.length - i);
    } else {
      transform = 'rotateY(0deg) translateZ(140px)';
      zIndex = MAX_ZINDEX;
    }

    return (
      <CoverSection
        key={song.songId}
        url={song.imgURL}
        transform={transform}
        zIndex={zIndex}
      />
    );
  });

  const flowRight = () => {
    if (index) {
      setIndex(idx => idx - 1);
    }
  };

  const flowLeft = () => {
    if (personalSongs.length > index + 1) {
      setIndex(idx => idx + 1);
    }
  };

  return (
    <LikedMusicBlock>
      <h4>좋아요한 노래</h4>
      <CoverflowBlock>
        <PrevBtn onClick={flowRight} dir={'prev'}>
          <IoIosArrowBack />
        </PrevBtn>
        {coverSections}
        <NextBtn onClick={flowLeft} dir={'next'}>
          <IoIosArrowForward />
        </NextBtn>
      </CoverflowBlock>
    </LikedMusicBlock>
  );
};

export default LikedMusic;
