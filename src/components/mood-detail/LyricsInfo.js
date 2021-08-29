import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { handleLyricsWithBr } from '../../util/HandleSongPropertyComponents';

const LyricsInfoBlock = styled.div`
  .lyrics-on {
    height: auto;
    overflow: visible;
  }
`;

const SongLyrics = styled.div`
  line-height: 2;
  color: #424242;
  font-size: 0.875rem;
  height: 11rem;
  overflow: hidden;
`;

const FoldButton = styled.button`
  position: relative;
  left: 46.4%;
  background: white;
  border: none;

  span {
    padding-right: 3px;
  }
`;

const LyricsInfo = ({ lyrics }) => {
  const [fold, setFold] = useState(true);

  const handleFoldClick = () => {
    setFold(fold => !fold);
  };
  const lyricsWithBr = handleLyricsWithBr(lyrics);
  return (
    <LyricsInfoBlock>
      <SongLyrics className={`${fold ? '' : 'lyrics-on'}`}>
        {lyricsWithBr}
      </SongLyrics>
      <FoldButton onClick={handleFoldClick}>
        {fold ? (
          <>
            <span>더보기</span>
            <AiOutlineDown />
          </>
        ) : (
          <>
            <span>접기</span>
            <AiOutlineUp />
          </>
        )}
      </FoldButton>
    </LyricsInfoBlock>
  );
};

export default LyricsInfo;
