import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import melon from '../asset/melon.png';
import moods from '../asset/moods';

export const handleMoodTags = moodTags =>
  moodTags.map(tag => {
    const mood = moods.find(m => m.id === tag);
    return (
      <span
        key={mood.id}
        className={mood.moodName}
        style={{ borderColor: mood.color }}
      >
        {mood.moodName_kr}
      </span>
    );
  });

const handleExternalIcons = url => {
  switch (url) {
    case 'youtube':
      return <AiFillYoutube className="youtube" />;
    case 'spotify':
      return <FaSpotify className="spotify" />;
    case 'melon':
      return <img src={melon} alt="melon-logo" className="melon" />;
    default:
      return '';
  }
};

export const handleExternalLinks = externalUrls =>
  Object.keys(externalUrls).map((url, index) => (
    <a key={index} href={externalUrls[url]} target="_blank" rel="noreferrer">
      <span className="external-link-anchor-icon">
        {handleExternalIcons(url)}
      </span>
      <span className="external-link-anchor-text">{url}</span>
    </a>
  ));

export const handleLyricsWithBr = lyrics =>
  lyrics.split('\n').map((lyric, index) => (
    <React.Fragment key={index}>
      {lyric}
      <br />
    </React.Fragment>
  ));
