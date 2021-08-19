import React from 'react';
import { TransverseLoading } from 'react-loadingg';
import YoutubeIframe from '../../util/YoutubeIframe';

const RelateVideo = ({ youtubeVideos }) => {
  return (
    <div className="related-video">
      <hr />
      <h3>관련 동영상</h3>
      <div className="video-tags">
        {youtubeVideos ? (
          youtubeVideos.map(link => (
            <YoutubeIframe
              key={link.id.videoId}
              youtubeLink={link.id.videoId}
            />
          ))
        ) : (
          <div>
            <TransverseLoading color="red" style={{ position: 'none' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelateVideo;
