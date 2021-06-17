import React from 'react';

const YoutubeIframe = ({ youtubeLink }) => {
  return (
    <iframe
      width="300"
      height="200"
      src={`https://www.youtube.com/embed/${youtubeLink}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default YoutubeIframe;
