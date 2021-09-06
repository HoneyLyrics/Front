import React from 'react';
import { TransverseLoading } from 'react-loadingg';
import styled from 'styled-components';
import YoutubeIframe from './YoutubeIframe';

const RelateVideoBlock = styled.div``;

const VideoTags = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    iframe {
      width: 240px;
      height: 160px;
    }
  }

  @media (max-width: 768px) {
    iframe {
      width: 180px;
      height: 120px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    iframe {
      width: 300px;
      height: 200px;
    }

    iframe + iframe {
      margin-top: 1rem;
    }
  }
`;

const RelateVideo = ({ youtubeVideos }) => {
  return (
    <RelateVideoBlock className="related-video">
      <VideoTags>
        {youtubeVideos ? (
          youtubeVideos.map(link => (
            <YoutubeIframe
              key={link.id.videoId}
              youtubeLink={link.id.videoId}
            />
          ))
        ) : (
          <TransverseLoading color="red" style={{ position: 'none' }} />
        )}
      </VideoTags>
    </RelateVideoBlock>
  );
};

export default RelateVideo;
